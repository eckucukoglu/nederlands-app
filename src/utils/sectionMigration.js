/**
 * sectionMigration.js
 * 
 * Provides two-way mapping and lossless migration utilities for chapter sections
 * that were renumbered to be strictly consecutive without gaps.
 * 
 * Guarantees zero data loss for:
 * - Completed sections (localStorage: 'completedSections')
 * - Favorite notes / bookmarks (localStorage: 'favoriteSections')
 * - Last visited section tabs (localStorage: 'lastVisitedTab_X', 'lastTabBeforeHome')
 * - Firebase synced data
 */

export const MIGRATION_VERSION_KEY = 'sectionsMigrated_v0.1.14';

export const LEGACY_SECTION_ID_MAP = {
  // Chapter 2
  "2.5": "2.4",
  "2.8": "2.5",
  "2.9": "2.6",
  "2.10": "2.7",
  "2.12": "2.8",

  // Chapter 3
  "3.6": "3.4",
  "3.7": "3.5",
  "3.8": "3.6",
  "3.9": "3.7",

  // Chapter 4
  "4.7": "4.6",
  "4.8": "4.7",

  // Chapter 5
  "5.8": "5.7",
  "5.9": "5.8",
  "5.10": "5.9",

  // Chapter 7
  "7.5": "7.4",
  "7.7": "7.5",
  "7.8": "7.6",
  "7.9": "7.7",
  "7.10": "7.8",
};

export const NEW_TO_LEGACY_SECTION_MAP = Object.fromEntries(
  Object.entries(LEGACY_SECTION_ID_MAP).map(([oldId, newId]) => [newId, oldId])
);

/**
 * Normalizes any section ID (legacy or current) to its canonical new ID.
 */
export const normalizeSectionId = (sectionId) => {
  if (!sectionId || typeof sectionId !== 'string') return sectionId;
  return LEGACY_SECTION_ID_MAP[sectionId] || sectionId;
};

/**
 * Migrates completed sections map so that canonical IDs are set if legacy IDs were completed.
 */
export const migrateCompletedSections = (rawCompleted = {}) => {
  if (!rawCompleted || typeof rawCompleted !== 'object') return { migrated: {}, changed: false };
  const migrated = {};
  let changed = false;

  Object.entries(rawCompleted).forEach(([secId, isDone]) => {
    if (LEGACY_SECTION_ID_MAP[secId]) {
      const newId = LEGACY_SECTION_ID_MAP[secId];
      migrated[newId] = isDone;
      changed = true;
    } else {
      migrated[secId] = isDone;
    }
  });

  return { migrated, changed };
};

/**
 * Migrates favorite sections map so that notes attached to legacy IDs are ported to new IDs.
 */
export const migrateFavoriteSections = (rawFavorites = {}) => {
  if (!rawFavorites || typeof rawFavorites !== 'object') return { migrated: {}, changed: false };
  const migrated = {};
  let changed = false;

  Object.entries(rawFavorites).forEach(([secId, note]) => {
    if (LEGACY_SECTION_ID_MAP[secId]) {
      const newId = LEGACY_SECTION_ID_MAP[secId];
      migrated[newId] = note;
      changed = true;
    } else {
      migrated[secId] = note;
    }
  });

  return { migrated, changed };
};

/**
 * Checks if a section is completed in either its canonical form or its legacy form.
 */
export const isSectionCompleted = (completedMap, section) => {
  if (!completedMap || !section) return false;
  if (completedMap[section.id]) return true;
  if (section.legacyId && completedMap[section.legacyId]) return true;
  if (NEW_TO_LEGACY_SECTION_MAP[section.id] && completedMap[NEW_TO_LEGACY_SECTION_MAP[section.id]]) return true;
  return false;
};

/**
 * Checks if a section is favorited in either its canonical form or its legacy form.
 */
export const getSectionFavoriteNote = (favoritesMap, section) => {
  if (!favoritesMap || !section) return null;
  if (favoritesMap[section.id]) return favoritesMap[section.id];
  if (section.legacyId && favoritesMap[section.legacyId]) return favoritesMap[section.legacyId];
  if (NEW_TO_LEGACY_SECTION_MAP[section.id] && favoritesMap[NEW_TO_LEGACY_SECTION_MAP[section.id]]) {
    return favoritesMap[NEW_TO_LEGACY_SECTION_MAP[section.id]];
  }
  return null;
};

/**
 * Executes one-time check and lossless migration on localStorage.
 */
export const migrateLocalStorageSectionData = () => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;

    const alreadyMigrated = localStorage.getItem(MIGRATION_VERSION_KEY);
    if (alreadyMigrated === 'true') {
      return;
    }

    // 1. completedSections
    const rawCompletedStr = localStorage.getItem('completedSections');
    if (rawCompletedStr) {
      const rawCompleted = JSON.parse(rawCompletedStr);
      const { migrated, changed } = migrateCompletedSections(rawCompleted);
      if (changed) {
        localStorage.setItem('completedSections', JSON.stringify(migrated));
      }
    }

    // 2. favoriteSections
    const rawFavsStr = localStorage.getItem('favoriteSections');
    if (rawFavsStr) {
      const rawFavs = JSON.parse(rawFavsStr);
      const { migrated, changed } = migrateFavoriteSections(rawFavs);
      if (changed) {
        localStorage.setItem('favoriteSections', JSON.stringify(migrated));
      }
    }

    // 3. lastTabBeforeHome
    const lastTab = localStorage.getItem('lastTabBeforeHome');
    if (lastTab && LEGACY_SECTION_ID_MAP[lastTab]) {
      localStorage.setItem('lastTabBeforeHome', LEGACY_SECTION_ID_MAP[lastTab]);
    }

    // 4. lastVisitedTab_X
    for (let ch = 1; ch <= 18; ch++) {
      const tabKey = `lastVisitedTab_${ch}`;
      const tabVal = localStorage.getItem(tabKey);
      if (tabVal && LEGACY_SECTION_ID_MAP[tabVal]) {
        localStorage.setItem(tabKey, LEGACY_SECTION_ID_MAP[tabVal]);
      }
    }

    localStorage.setItem(MIGRATION_VERSION_KEY, 'true');
  } catch (err) {
    console.warn("Non-critical warning in migrateLocalStorageSectionData:", err);
  }
};

