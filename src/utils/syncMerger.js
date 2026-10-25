// src/utils/syncMerger.js

/**
 * Safely parse JSON with fallback.
 */
function safeJsonParse(val, fallback = null) {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'object') return val;
  try {
    return JSON.parse(val);
  } catch (e) {
    return fallback;
  }
}

/**
 * Safely serialize JSON.
 */
function safeJsonStringify(val) {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  try {
    return JSON.stringify(val);
  } catch (e) {
    return '';
  }
}

/**
 * Merges two maps of section completions: union of completed sections.
 */
export function mergeCompletedSections(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(key => {
    if (local[key]) {
      merged[key] = true;
    }
  });

  return safeJsonStringify(merged);
}

/**
 * Merges two maps of favorite sections and notes.
 */
export function mergeFavoriteSections(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(key => {
    // If local has a non-empty note, or key wasn't in cloud, keep local
    if (local[key] || !merged[key]) {
      merged[key] = local[key];
    }
  });

  return safeJsonStringify(merged);
}

/**
 * Merges global word pools.
 * Learning principle: 'known' always takes precedence over 'unknown'.
 * If statuses match, newer timestamp or richer entry is preferred.
 */
export function mergeGlobalWordPool(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(key => {
    const localEntry = local[key];
    const cloudEntry = merged[key];

    if (!cloudEntry) {
      merged[key] = localEntry;
    } else {
      const isLocalKnown = localEntry?.status === 'known';
      const isCloudKnown = cloudEntry?.status === 'known';

      if (isLocalKnown && !isCloudKnown) {
        merged[key] = { ...cloudEntry, ...localEntry, status: 'known' };
      } else if (!isLocalKnown && isCloudKnown) {
        merged[key] = { ...localEntry, ...cloudEntry, status: 'known' };
      } else {
        // Both known or both unknown: prefer whichever has newer timestamp or more fields
        const localTime = new Date(localEntry?.addedAt || 0).getTime();
        const cloudTime = new Date(cloudEntry?.addedAt || 0).getTime();
        merged[key] = localTime >= cloudTime ? { ...cloudEntry, ...localEntry } : { ...localEntry, ...cloudEntry };
      }
    }
  });

  return safeJsonStringify(merged);
}

/**
 * Merges section word statuses (vocabulary, dialogue, reading).
 * 'known' status takes precedence over 'unknown'.
 */
export function mergeWordStatuses(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(word => {
    const localStatus = local[word];
    const cloudStatus = merged[word];

    if (!cloudStatus) {
      merged[word] = localStatus;
    } else if (localStatus === 'known' || cloudStatus === 'known') {
      merged[word] = 'known';
    } else {
      merged[word] = localStatus || cloudStatus;
    }
  });

  return safeJsonStringify(merged);
}

/**
 * Merges flashcard review statistics.
 * Retains max counts and best mastery state.
 */
export function mergeFlashcardStats(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(word => {
    const l = local[word] || {};
    const c = merged[word] || {};

    const lKnown = Number(l.known) || 0;
    const cKnown = Number(c.known) || 0;
    const lUnknown = Number(l.unknown) || 0;
    const cUnknown = Number(c.unknown) || 0;

    const isMastered = l.lastStatus === 'known' || c.lastStatus === 'known' || (lKnown > lUnknown && lKnown > 0) || (cKnown > cUnknown && cKnown > 0);

    merged[word] = {
      ...c,
      ...l,
      known: Math.max(lKnown, cKnown),
      unknown: Math.max(lUnknown, cUnknown),
      lastStatus: isMastered ? 'known' : (l.lastStatus || c.lastStatus || 'unknown'),
      lastReviewed: (new Date(l.lastReviewed || 0) > new Date(c.lastReviewed || 0)) ? (l.lastReviewed || c.lastReviewed) : (c.lastReviewed || l.lastReviewed)
    };
  });

  return safeJsonStringify(merged);
}

/**
 * Merges quiz history (union of attempts, preserving best scores).
 */
export function mergeQuizHistory(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(quizKey => {
    const l = local[quizKey];
    const c = merged[quizKey];

    if (!c) {
      merged[quizKey] = l;
    } else {
      // If both exist, take the attempt with higher score or percentage
      const lScore = Number(l?.score) || Number(l?.correctCount) || 0;
      const cScore = Number(c?.score) || Number(c?.correctCount) || 0;
      merged[quizKey] = lScore >= cScore ? { ...c, ...l } : { ...l, ...c };
    }
  });

  return safeJsonStringify(merged);
}

/**
 * Merges question stats.
 */
export function mergeQuestionStats(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(qId => {
    const l = local[qId] || {};
    const c = merged[qId] || {};

    merged[qId] = {
      ...c,
      ...l,
      correct: Math.max(Number(l.correct) || 0, Number(c.correct) || 0),
      wrong: Math.max(Number(l.wrong) || 0, Number(c.wrong) || 0),
      lastAttempt: (new Date(l.lastAttempt || 0) > new Date(c.lastAttempt || 0)) ? (l.lastAttempt || c.lastAttempt) : (c.lastAttempt || l.lastAttempt)
    };
  });

  return safeJsonStringify(merged);
}

/**
 * Merges starred irregular verbs (set union).
 */
export function mergeStarredVerbs(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, []);
  const local = safeJsonParse(localStr, []);
  const cloudList = Array.isArray(cloud) ? cloud : [];
  const localList = Array.isArray(local) ? local : [];

  const merged = Array.from(new Set([...cloudList, ...localList]));
  return safeJsonStringify(merged);
}

/**
 * Merges grammar test scores (keeps max scores per topic).
 */
export function mergeGrammarScores(cloudStr, localStr) {
  const cloud = safeJsonParse(cloudStr, {});
  const local = safeJsonParse(localStr, {});
  const merged = { ...cloud };

  Object.keys(local).forEach(topic => {
    const lScore = Number(local[topic]) || 0;
    const cScore = Number(merged[topic]) || 0;
    merged[topic] = Math.max(lScore, cScore);
  });

  return safeJsonStringify(merged);
}

/**
 * Main bidirectional merger:
 * Takes cloudData (map of key -> val) and localData (map of key -> val),
 * along with optional metadata ({ cloudSyncedAt, localLastSyncedAt, localLastUpdatedAt }).
 * Produces an intelligent, lossless, non-destructive merged map.
 */
export function mergeCloudAndLocalData(cloudData = {}, localData = {}, meta = {}) {
  const merged = {};
  const allKeys = new Set([...Object.keys(cloudData || {}), ...Object.keys(localData || {})]);

  const cloudSyncedAt = meta.cloudSyncedAt ? new Date(meta.cloudSyncedAt).getTime() : 0;
  const localLastSyncedAt = meta.localLastSyncedAt ? new Date(meta.localLastSyncedAt).getTime() : 0;
  const localLastUpdatedAt = meta.localLastUpdatedAt ? new Date(meta.localLastUpdatedAt).getTime() : 0;

  // If local previously synced, and cloud was updated more recently from another session/device,
  // and local has made no unpushed updates since its last sync, cloud state is authoritative for deletions
  const cloudIsNewerAuthoritative = (
    localLastSyncedAt > 0 &&
    cloudSyncedAt > localLastSyncedAt &&
    localLastUpdatedAt <= localLastSyncedAt
  );

  allKeys.forEach(key => {
    // Exclude ephemeral, session or auth-specific keys
    if (key.startsWith('firebase') || key === 'emailForSignIn') {
      return;
    }

    const cVal = cloudData[key];
    const lVal = localData[key];

    // Key exists only in one of them
    if (cVal === undefined || cVal === null) {
      if (lVal !== undefined && lVal !== null) merged[key] = lVal;
      return;
    }
    if (lVal === undefined || lVal === null) {
      merged[key] = cVal;
      return;
    }

    // Key exists in both - apply specialized merge by key pattern
    if (key === 'completedSections') {
      merged[key] = cloudIsNewerAuthoritative ? cVal : mergeCompletedSections(cVal, lVal);
    } else if (key === 'favoriteSections') {
      merged[key] = cloudIsNewerAuthoritative ? cVal : mergeFavoriteSections(cVal, lVal);
    } else if (key === 'globalWordPool') {
      merged[key] = mergeGlobalWordPool(cVal, lVal);
    } else if (
      key.startsWith('vocabularyWordStatuses_') ||
      key.startsWith('dialogueWordStatuses_') ||
      key.startsWith('readingWordStatuses_')
    ) {
      merged[key] = mergeWordStatuses(cVal, lVal);
    } else if (key === 'flashcardStats') {
      merged[key] = mergeFlashcardStats(cVal, lVal);
    } else if (key === 'quizHistory') {
      merged[key] = mergeQuizHistory(cVal, lVal);
    } else if (key === 'questionStats') {
      merged[key] = mergeQuestionStats(cVal, lVal);
    } else if (key === 'starredIrregularVerbs') {
      merged[key] = mergeStarredVerbs(cVal, lVal);
    } else if (key === 'grammarTestScores') {
      merged[key] = mergeGrammarScores(cVal, lVal);
    } else if (key === 'grammarFavorites') {
      const c = safeJsonParse(cVal, []);
      const l = safeJsonParse(lVal, []);
      if (Array.isArray(c) && Array.isArray(l)) {
        merged[key] = safeJsonStringify(Array.from(new Set([...c, ...l])));
      } else {
        merged[key] = lVal || cVal;
      }
    } else {
      // General fallback: prefer local if non-empty, otherwise cloud
      merged[key] = (lVal !== '' && lVal !== undefined) ? lVal : cVal;
    }
  });

  return merged;
}
