'use strict';

// All saved-book operations share this adapter. The original database/store
// stays at version 1 so an older, open editor never blocks an upgrade.
globalThis.KomaBookStore = (() => {
  const STORE = 'projects';
  const BOOK = 'library:book:';
  const META = 'library:meta:';
  const ACTIVE = 'library:active';
  const LEGACY = 'library:legacy-fingerprint';
  const result = request => new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  const done = transaction => new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onabort = transaction.onerror = () => reject(transaction.error || new Error('Storage transaction failed.'));
  });
  function open() {
    return new Promise((resolve, reject) => {
      if (!globalThis.indexedDB) { reject(new Error('Browser storage is unavailable.')); return; }
      const request = indexedDB.open('koma-manga-studio', 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE);
      };
      request.onsuccess = () => {
        const db = request.result;
        db.onversionchange = () => db.close();
        resolve(db);
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error('Close other Koma windows, then reopen the app.'));
    });
  }
  async function session(db) {
    const tx = db.transaction(STORE);
    const store = tx.objectStore(STORE);
    const [activeId, legacy, fingerprint] = await Promise.all([
      result(store.get(ACTIVE)), result(store.get('current')), result(store.get(LEGACY))
    ]);
    return {activeId, legacy, fingerprint};
  }
  function load(db, id) { return result(db.transaction(STORE).objectStore(STORE).get(BOOK + id)); }
  async function list(db) {
    const range = IDBKeyRange.bound(META, META + '\uffff');
    const summaries = await result(db.transaction(STORE).objectStore(STORE).getAll(range));
    return summaries.sort((a, b) => b.updatedAt - a.updatedAt);
  }
  async function save(db, {id, book, summary, activate = false, legacyFingerprint}) {
    const tx = db.transaction(STORE, 'readwrite');
    const finished = done(tx), store = tx.objectStore(STORE);
    store.put(book, BOOK + id);
    store.put({...summary, id}, META + id);
    if (activate) store.put(id, ACTIVE);
    if (legacyFingerprint !== undefined) store.put(legacyFingerprint, LEGACY);
    await finished;
  }
  async function activate(db, id) {
    const tx = db.transaction(STORE, 'readwrite');
    const finished = done(tx);
    tx.objectStore(STORE).put(id, ACTIVE);
    await finished;
  }
  async function remove(db, id) {
    const tx = db.transaction(STORE, 'readwrite');
    const finished = done(tx), store = tx.objectStore(STORE);
    store.delete(BOOK + id);
    store.delete(META + id);
    await finished;
  }
  return {open, session, load, list, save, activate, remove};
})();
