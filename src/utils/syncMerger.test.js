// src/utils/syncMerger.test.js
import {
  mergeCompletedSections,
  mergeFavoriteSections,
  mergeGlobalWordPool,
  mergeWordStatuses,
  mergeFlashcardStats,
  mergeQuizHistory,
  mergeStarredVerbs,
  mergeCloudAndLocalData
} from './syncMerger';

describe('syncMerger Unit Tests', () => {
  test('mergeCompletedSections performs union of completed sections', () => {
    const cloud = JSON.stringify({ '1.1': true, '1.2': true });
    const local = JSON.stringify({ '1.3': true });
    const merged = JSON.parse(mergeCompletedSections(cloud, local));

    expect(merged['1.1']).toBe(true);
    expect(merged['1.2']).toBe(true);
    expect(merged['1.3']).toBe(true);
  });

  test('mergeCompletedSections safely handles empty or invalid inputs', () => {
    expect(JSON.parse(mergeCompletedSections(null, JSON.stringify({ '1.1': true })))).toEqual({ '1.1': true });
    expect(JSON.parse(mergeCompletedSections('invalid-json', null))).toEqual({});
  });

  test('mergeFavoriteSections merges bookmarks and notes', () => {
    const cloud = JSON.stringify({ '1.1': 'Cloud Note' });
    const local = JSON.stringify({ '1.2': 'Phone Note' });
    const merged = JSON.parse(mergeFavoriteSections(cloud, local));

    expect(merged['1.1']).toBe('Cloud Note');
    expect(merged['1.2']).toBe('Phone Note');
  });

  test('mergeGlobalWordPool prioritizes known status over unknown status', () => {
    const cloud = JSON.stringify({
      hond: { id: 1, nl: 'hond', status: 'known', addedAt: '2026-01-01T00:00:00Z' },
      kat: { id: 2, nl: 'kat', status: 'unknown', addedAt: '2026-01-01T00:00:00Z' }
    });
    const local = JSON.stringify({
      kat: { id: 2, nl: 'kat', status: 'known', addedAt: '2026-01-02T00:00:00Z' },
      vis: { id: 3, nl: 'vis', status: 'unknown', addedAt: '2026-01-02T00:00:00Z' }
    });

    const merged = JSON.parse(mergeGlobalWordPool(cloud, local));
    expect(merged.hond.status).toBe('known');
    expect(merged.kat.status).toBe('known'); // local had known, cloud had unknown
    expect(merged.vis.status).toBe('unknown');
  });

  test('mergeWordStatuses prioritizes known over unknown across chapters', () => {
    const cloud = JSON.stringify({ hond: 'unknown', fiets: 'known' });
    const local = JSON.stringify({ hond: 'known', boom: 'unknown' });
    const merged = JSON.parse(mergeWordStatuses(cloud, local));

    expect(merged.hond).toBe('known');
    expect(merged.fiets).toBe('known');
    expect(merged.boom).toBe('unknown');
  });

  test('mergeFlashcardStats takes max known/unknown counts and marks mastered if mastered on either device', () => {
    const cloud = JSON.stringify({
      hond: { known: 5, unknown: 1, lastStatus: 'known' }
    });
    const local = JSON.stringify({
      hond: { known: 2, unknown: 4, lastStatus: 'unknown' },
      kat: { known: 3, unknown: 0, lastStatus: 'known' }
    });

    const merged = JSON.parse(mergeFlashcardStats(cloud, local));
    expect(merged.hond.known).toBe(5);
    expect(merged.hond.unknown).toBe(4);
    expect(merged.hond.lastStatus).toBe('known');
    expect(merged.kat.known).toBe(3);
  });

  test('mergeQuizHistory merges quiz attempts preserving highest scores', () => {
    const cloud = JSON.stringify({
      'q1': { score: 80, correctCount: 8, total: 10 }
    });
    const local = JSON.stringify({
      'q1': { score: 100, correctCount: 10, total: 10 },
      'q2': { score: 90, correctCount: 9, total: 10 }
    });

    const merged = JSON.parse(mergeQuizHistory(cloud, local));
    expect(merged.q1.score).toBe(100);
    expect(merged.q2.score).toBe(90);
  });

  test('mergeStarredVerbs performs set union of verbs', () => {
    const cloud = JSON.stringify(['zijn', 'hebben']);
    const local = JSON.stringify(['hebben', 'gaan']);
    const merged = JSON.parse(mergeStarredVerbs(cloud, local));

    expect(merged).toContain('zijn');
    expect(merged).toContain('hebben');
    expect(merged).toContain('gaan');
    expect(merged.length).toBe(3);
  });

  test('mergeCloudAndLocalData combines all user progress and excludes internal firebase keys', () => {
    const cloudData = {
      completedSections: JSON.stringify({ '1.1': true }),
      globalWordPool: JSON.stringify({ hond: { nl: 'hond', status: 'known' } }),
      starredIrregularVerbs: JSON.stringify(['zijn']),
      'firebase:authUser:123': 'token'
    };

    const localData = {
      completedSections: JSON.stringify({ '1.2': true }),
      globalWordPool: JSON.stringify({ kat: { nl: 'kat', status: 'known' } }),
      starredIrregularVerbs: JSON.stringify(['gaan']),
      appLanguage: 'tr',
      emailForSignIn: 'test@example.com'
    };

    const merged = mergeCloudAndLocalData(cloudData, localData);

    expect(merged['firebase:authUser:123']).toBeUndefined();
    expect(merged['emailForSignIn']).toBeUndefined();
    expect(JSON.parse(merged.completedSections)).toEqual({ '1.1': true, '1.2': true });
    expect(JSON.parse(merged.globalWordPool).hond.status).toBe('known');
    expect(JSON.parse(merged.globalWordPool).kat.status).toBe('known');
    expect(JSON.parse(merged.starredIrregularVerbs)).toEqual(['zijn', 'gaan']);
    expect(merged.appLanguage).toBe('tr');
  });

  test('mergeCloudAndLocalData adopts cloud deletions when cloud is newer authoritative and local has not modified', () => {
    // Cloud has uncompleted 1.1 (cloud only has 1.2)
    const cloudData = {
      completedSections: JSON.stringify({ '1.2': true }),
      favoriteSections: JSON.stringify({})
    };

    // Local device was synced at 10:00:00 and had 1.1
    const localData = {
      completedSections: JSON.stringify({ '1.1': true, '1.2': true }),
      favoriteSections: JSON.stringify({ '1.1': 'Old note' })
    };

    const meta = {
      cloudSyncedAt: '2026-10-25T10:15:00.000Z',
      localLastSyncedAt: '2026-10-25T10:00:00.000Z',
      localLastUpdatedAt: '2026-10-25T10:00:00.000Z'
    };

    const merged = mergeCloudAndLocalData(cloudData, localData, meta);
    // Cloud state is adopted: 1.1 remains uncompleted and favorite note removed
    expect(JSON.parse(merged.completedSections)).toEqual({ '1.2': true });
    expect(JSON.parse(merged.favoriteSections)).toEqual({});
  });

  test('mergeCloudAndLocalData preserves local additions when local was modified after last sync', () => {
    const cloudData = {
      completedSections: JSON.stringify({ '1.2': true })
    };

    const localData = {
      completedSections: JSON.stringify({ '1.2': true, '1.3': true })
    };

    const meta = {
      cloudSyncedAt: '2026-10-25T10:10:00.000Z',
      localLastSyncedAt: '2026-10-25T10:00:00.000Z',
      localLastUpdatedAt: '2026-10-25T10:12:00.000Z' // local modified after sync
    };

    const merged = mergeCloudAndLocalData(cloudData, localData, meta);
    expect(JSON.parse(merged.completedSections)).toEqual({ '1.2': true, '1.3': true });
  });
});
