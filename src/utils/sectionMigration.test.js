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

  test('LEGACY_SECTION_ID_MAP maps old skipped IDs to strictly consecutive IDs', () => {
    // Chapter 2
    expect(LEGACY_SECTION_ID_MAP['2.5']).toBe('2.4');
    expect(LEGACY_SECTION_ID_MAP['2.8']).toBe('2.5');
    expect(LEGACY_SECTION_ID_MAP['2.9']).toBe('2.6');
    expect(LEGACY_SECTION_ID_MAP['2.10']).toBe('2.7');
    expect(LEGACY_SECTION_ID_MAP['2.12']).toBe('2.8');

    // Chapter 3
    expect(LEGACY_SECTION_ID_MAP['3.6']).toBe('3.4');
    expect(LEGACY_SECTION_ID_MAP['3.7']).toBe('3.5');
    expect(LEGACY_SECTION_ID_MAP['3.8']).toBe('3.6');
    expect(LEGACY_SECTION_ID_MAP['3.9']).toBe('3.7');

    // Chapter 4
    expect(LEGACY_SECTION_ID_MAP['4.7']).toBe('4.6');
    expect(LEGACY_SECTION_ID_MAP['4.8']).toBe('4.7');

    // Chapter 5
    expect(LEGACY_SECTION_ID_MAP['5.8']).toBe('5.7');
    expect(LEGACY_SECTION_ID_MAP['5.9']).toBe('5.8');
    expect(LEGACY_SECTION_ID_MAP['5.10']).toBe('5.9');

    // Chapter 7
    expect(LEGACY_SECTION_ID_MAP['7.5']).toBe('7.4');
    expect(LEGACY_SECTION_ID_MAP['7.7']).toBe('7.5');
    expect(LEGACY_SECTION_ID_MAP['7.8']).toBe('7.6');
    expect(LEGACY_SECTION_ID_MAP['7.9']).toBe('7.7');
    expect(LEGACY_SECTION_ID_MAP['7.10']).toBe('7.8');
  });

  test('NEW_TO_LEGACY_SECTION_MAP provides inverse mappings accurately', () => {
    Object.entries(LEGACY_SECTION_ID_MAP).forEach(([oldId, newId]) => {
      expect(NEW_TO_LEGACY_SECTION_MAP[newId]).toBe(oldId);
    });
  });

  test('normalizeSectionId converts legacy IDs and leaves current IDs intact', () => {
    expect(normalizeSectionId('2.12')).toBe('2.8');
    expect(normalizeSectionId('2.8')).toBe('2.5');
    expect(normalizeSectionId('2.5')).toBe('2.4');
    expect(normalizeSectionId('2.4')).toBe('2.4');
    expect(normalizeSectionId('1.1')).toBe('1.1');
    expect(normalizeSectionId('Reading-2')).toBe('Reading-2');
    expect(normalizeSectionId('On-Class-2')).toBe('On-Class-2');
  });

  test('migrateCompletedSections migrates old keys losslessly', () => {
    const raw = {
      '1.1': true,
      '2.5': true, // old 2.5 -> new 2.4
      '2.8': true, // old 2.8 -> new 2.5
      '3.9': true, // old 3.9 -> new 3.7
    };
    const { migrated, changed } = migrateCompletedSections(raw);
    expect(changed).toBe(true);
    expect(migrated['1.1']).toBe(true);
    expect(migrated['2.4']).toBe(true);
    expect(migrated['2.5']).toBe(true);
    expect(migrated['3.7']).toBe(true);
  });

  test('migrateFavoriteSections migrates notes to new section IDs without duplicating', () => {
    const rawFavs = {
      '1.3': 'Landen note',
      '2.8': 'Possessief pronomen note', // old 2.8 -> new 2.5
      '7.10': 'Tekst & Uitspraak note'   // old 7.10 -> new 7.8
    };
    const { migrated, changed } = migrateFavoriteSections(rawFavs);
    expect(changed).toBe(true);
    expect(migrated['1.3']).toBe('Landen note');
    expect(migrated['2.5']).toBe('Possessief pronomen note');
    expect(migrated['7.8']).toBe('Tekst & Uitspraak note');
    expect(migrated['2.8']).toBeUndefined();
    expect(migrated['7.10']).toBeUndefined();
  });

  test('isSectionCompleted recognizes both canonical and legacy IDs', () => {
    const section2_4 = { id: '2.4', legacyId: '2.5' };
    const section1_1 = { id: '1.1' };

    // Case 1: Completed under new ID
    expect(isSectionCompleted({ '2.4': true }, section2_4)).toBe(true);

    // Case 2: Completed under legacy ID
    expect(isSectionCompleted({ '2.5': true }, section2_4)).toBe(true);

    // Case 3: Not completed
    expect(isSectionCompleted({}, section2_4)).toBe(false);
    expect(isSectionCompleted({ '1.2': true }, section1_1)).toBe(false);
  });

  test('getSectionFavoriteNote retrieves note for legacy and new IDs', () => {
    const sec = { id: '2.4', legacyId: '2.5' };
    expect(getSectionFavoriteNote({ '2.4': 'New note' }, sec)).toBe('New note');
    expect(getSectionFavoriteNote({ '2.5': 'Old note' }, sec)).toBe('Old note');
    expect(getSectionFavoriteNote({}, sec)).toBeNull();
  });

  test('migrateLocalStorageSectionData migrates localStorage and sets version flag', () => {
    localStorage.setItem('completedSections', JSON.stringify({ '2.12': true, '3.8': true }));
    localStorage.setItem('favoriteSections', JSON.stringify({ '4.7': 'Openingstijden' }));
    localStorage.setItem('lastTabBeforeHome', '2.12');
    localStorage.setItem('lastVisitedTab_2', '2.12');

    migrateLocalStorageSectionData();

    expect(localStorage.getItem(MIGRATION_VERSION_KEY)).toBe('true');
    const comp = JSON.parse(localStorage.getItem('completedSections'));
    expect(comp['2.8']).toBe(true); // 2.12 -> 2.8
    expect(comp['3.6']).toBe(true); // 3.8 -> 3.6

    const favs = JSON.parse(localStorage.getItem('favoriteSections'));
    expect(favs['4.6']).toBe('Openingstijden'); // 4.7 -> 4.6

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
    const statsWithLegacy = calculateOverallProgress([], { '2.5': true }, {}, 1);
    const statsWithNew = calculateOverallProgress([], { '2.4': true }, {}, 1);

    expect(statsWithLegacy.completedSectionsCount).toBe(statsWithNew.completedSectionsCount);
    expect(statsWithLegacy.sectionsXP).toBe(statsWithNew.sectionsXP);
  });
});

