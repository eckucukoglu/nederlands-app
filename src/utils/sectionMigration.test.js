import {
  LEGACY_SECTION_ID_MAP,
  NEW_TO_LEGACY_SECTION_MAP,
  normalizeSectionId,
  migrateCompletedSections,
  migrateFavoriteSections,
  isSectionCompleted,
  getSectionFavoriteNote,
  migrateLocalStorageSectionData,
  MIGRATION_VERSION_KEY
} from './sectionMigration';
import { bookSections } from '../data';
import { calculateOverallProgress } from './progress';

describe('sectionMigration utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('OBSOLETE_SECTION_ID_MAP maps obsolete IDs from previous versions', () => {
    // Chapter 2
    expect(LEGACY_SECTION_ID_MAP['2.9']).toBe('2.6');
    expect(LEGACY_SECTION_ID_MAP['2.10']).toBe('2.7');
    expect(LEGACY_SECTION_ID_MAP['2.12']).toBe('2.8');

    // Chapter 3
    expect(LEGACY_SECTION_ID_MAP['3.8']).toBe('3.6');
    expect(LEGACY_SECTION_ID_MAP['3.9']).toBe('3.7');

    // Chapter 4
    expect(LEGACY_SECTION_ID_MAP['4.8']).toBe('4.7');

    // Chapter 5
    expect(LEGACY_SECTION_ID_MAP['5.10']).toBe('5.9');

    // Chapter 7
    expect(LEGACY_SECTION_ID_MAP['7.9']).toBe('7.7');
    expect(LEGACY_SECTION_ID_MAP['7.10']).toBe('7.8');
  });

  test('NEW_TO_LEGACY_SECTION_MAP provides inverse mappings accurately', () => {
    Object.entries(LEGACY_SECTION_ID_MAP).forEach(([oldId, newId]) => {
      expect(NEW_TO_LEGACY_SECTION_MAP[newId]).toBe(oldId);
    });
  });

  test('normalizeSectionId converts obsolete legacy IDs and leaves active IDs intact', () => {
    // Obsolete IDs are normalized
    expect(normalizeSectionId('2.12')).toBe('2.8');
    expect(normalizeSectionId('2.10')).toBe('2.7');
    expect(normalizeSectionId('2.9')).toBe('2.6');
    expect(normalizeSectionId('3.8')).toBe('3.6');
    expect(normalizeSectionId('3.9')).toBe('3.7');
    expect(normalizeSectionId('4.8')).toBe('4.7');
    expect(normalizeSectionId('5.10')).toBe('5.9');
    expect(normalizeSectionId('7.9')).toBe('7.7');
    expect(normalizeSectionId('7.10')).toBe('7.8');

    // Active canonical IDs must NEVER be mutated
    expect(normalizeSectionId('2.5')).toBe('2.5');
    expect(normalizeSectionId('2.4')).toBe('2.4');
    expect(normalizeSectionId('2.8')).toBe('2.8');
    expect(normalizeSectionId('1.1')).toBe('1.1');
    expect(normalizeSectionId('Reading-2')).toBe('Reading-2');
    expect(normalizeSectionId('On-Class-2')).toBe('On-Class-2');
  });

  test('migrateCompletedSections migrates obsolete keys losslessly and leaves active IDs intact', () => {
    const raw = {
      '1.1': true,
      '2.5': true, // active 2.5 remains 2.5
      '2.12': true, // obsolete 2.12 -> 2.8
      '3.9': true,  // obsolete 3.9 -> 3.7
    };
    const { migrated, changed } = migrateCompletedSections(raw);
    expect(changed).toBe(true);
    expect(migrated['1.1']).toBe(true);
    expect(migrated['2.5']).toBe(true);
    expect(migrated['2.8']).toBe(true);
    expect(migrated['3.7']).toBe(true);
  });

  test('migrateFavoriteSections migrates notes to canonical IDs without mutating active IDs', () => {
    const rawFavs = {
      '1.3': 'Landen note',
      '2.5': 'Active 2.5 note',
      '7.10': 'Tekst & Uitspraak note' // obsolete 7.10 -> 7.8
    };
    const { migrated, changed } = migrateFavoriteSections(rawFavs);
    expect(changed).toBe(true);
    expect(migrated['1.3']).toBe('Landen note');
    expect(migrated['2.5']).toBe('Active 2.5 note');
    expect(migrated['7.8']).toBe('Tekst & Uitspraak note');
    expect(migrated['7.10']).toBeUndefined();
  });

  test('isSectionCompleted recognizes canonical section and does not cross-contaminate active sections', () => {
    const section2_4 = { id: '2.4', legacyId: '2.5' };
    const section2_5 = { id: '2.5', legacyId: '2.8' };
    const section2_8 = { id: '2.8', legacyId: '2.12' };
    const section1_1 = { id: '1.1' };

    // Completing 2.5 completes ONLY 2.5, NEVER 2.4!
    expect(isSectionCompleted({ '2.5': true }, section2_5)).toBe(true);
    expect(isSectionCompleted({ '2.5': true }, section2_4)).toBe(false);

    // Completing 2.4 completes ONLY 2.4, NEVER 2.5!
    expect(isSectionCompleted({ '2.4': true }, section2_4)).toBe(true);
    expect(isSectionCompleted({ '2.4': true }, section2_5)).toBe(false);

    // Obsolete legacy IDs that do not collide with active IDs are recognized
    expect(isSectionCompleted({ '2.12': true }, section2_8)).toBe(true);

    // Not completed
    expect(isSectionCompleted({}, section2_4)).toBe(false);
    expect(isSectionCompleted({ '1.2': true }, section1_1)).toBe(false);
  });

  test('getSectionFavoriteNote retrieves note without cross-contamination', () => {
    const section2_4 = { id: '2.4', legacyId: '2.5' };
    const section2_5 = { id: '2.5', legacyId: '2.8' };
    const section2_8 = { id: '2.8', legacyId: '2.12' };

    expect(getSectionFavoriteNote({ '2.4': 'Note 2.4' }, section2_4)).toBe('Note 2.4');
    // Note on 2.5 must not attach to 2.4
    expect(getSectionFavoriteNote({ '2.5': 'Note 2.5' }, section2_4)).toBeNull();
    expect(getSectionFavoriteNote({ '2.5': 'Note 2.5' }, section2_5)).toBe('Note 2.5');

    // Obsolete non-colliding legacyId is recognized
    expect(getSectionFavoriteNote({ '2.12': 'Old 2.12 note' }, section2_8)).toBe('Old 2.12 note');
  });

  test('migrateLocalStorageSectionData migrates localStorage and sets version flag', () => {
    localStorage.setItem('completedSections', JSON.stringify({ '2.12': true, '3.8': true }));
    localStorage.setItem('favoriteSections', JSON.stringify({ '7.10': 'Openingstijden' }));
    localStorage.setItem('lastTabBeforeHome', '2.12');
    localStorage.setItem('lastVisitedTab_2', '2.12');

    migrateLocalStorageSectionData();

    expect(localStorage.getItem(MIGRATION_VERSION_KEY)).toBe('true');
    const comp = JSON.parse(localStorage.getItem('completedSections'));
    expect(comp['2.8']).toBe(true); // 2.12 -> 2.8
    expect(comp['3.6']).toBe(true); // 3.8 -> 3.6

    const favs = JSON.parse(localStorage.getItem('favoriteSections'));
    expect(favs['7.8']).toBe('Openingstijden'); // 7.10 -> 7.8

    expect(localStorage.getItem('lastTabBeforeHome')).toBe('2.8');
    expect(localStorage.getItem('lastVisitedTab_2')).toBe('2.8');
  });

  test('all 18 chapters have strictly consecutive section IDs without gaps', () => {
    for (let ch = 1; ch <= 18; ch++) {
      const chSections = bookSections.filter(s => s.chapter === ch && !s.id.startsWith('Reading-') && !s.id.startsWith('On-Class-'));
      const ids = chSections.map(s => s.id);
      
      ids.forEach((id, idx) => {
        const expectedId = `${ch}.${idx + 1}`;
        expect(id).toBe(expectedId);
      });
    }
  });

  test('zero data loss in calculateOverallProgress when completed contains legacy IDs', () => {
    // If user has old section completed
    const statsWithLegacy = calculateOverallProgress([], { '2.12': true }, {}, 1);
    const statsWithNew = calculateOverallProgress([], { '2.8': true }, {}, 1);

    expect(statsWithLegacy.completedSectionsCount).toBe(statsWithNew.completedSectionsCount);
    expect(statsWithLegacy.sectionsXP).toBe(statsWithNew.sectionsXP);
  });
});

