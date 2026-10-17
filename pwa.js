'use strict';

(() => {
  const byId = id => document.getElementById(id);
  const displayMode = window.matchMedia('(display-mode: standalone)');
  const appleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  let installPrompt = null;
  let registration = null;
  let offlineReady = false;
  let updating = false;
  let reloadForUpdate = false;
  let setupFailed = false;

  const installed = () => displayMode.matches || navigator.standalone === true;
  const canRegister = () => window.isSecureContext &&
    ['https:', 'http:'].includes(location.protocol) && 'serviceWorker' in navigator;

  function renderState() {
    byId('pwa-install').classList.toggle('hidden', installed());
    byId('pwa-title').textContent = installed() ? 'Your home-screen studio' : 'Keep Koma on your phone';
    byId('pwa-install').textContent = installPrompt ? 'Install app' : 'Add to home screen';
    const text = !canRegister()
      ? 'Open Koma from its secure web address to install it.'
      : setupFailed ? 'Offline setup failed. Connect and reopen the app to retry.'
      : offlineReady ? (navigator.onLine === false ? 'Offline and ready to create.' : 'Ready to work offline on this device.')
      : 'Preparing offline access…';
    byId('pwa-status').textContent = text;
    byId('pwa-info-status').textContent = text;
  }

  function showGuide() {
    byId('install-apple').classList.toggle('hidden', !appleDevice);
    byId('install-other').classList.toggle('hidden', appleDevice);
    byId('install-local').classList.toggle('hidden', canRegister());
    if (!byId('install-dialog').open) byId('install-dialog').showModal();
  }

  async function install() {
    if (!installPrompt) { showGuide(); return; }
    const prompt = installPrompt;
    installPrompt = null;
    try {
      await prompt.prompt();
      const choice = await prompt.userChoice;
      if (choice.outcome === 'accepted') {
        byId('pwa-status').textContent = 'Finish installation, then launch Koma from your home screen.';
      } else renderState();
    } catch { showGuide(); }
  }

  function offerUpdate() {
    const pending = Boolean(navigator.serviceWorker.controller && registration?.waiting);
    byId('pwa-update').classList.toggle('hidden', !pending);
  }

  async function update() {
    if (updating || !registration?.waiting) return;
    updating = true;
    byId('pwa-update-button').disabled = true;
    try {
      const saved = await window.komaBeforeUpdate?.();
      if (saved !== true) return;
      reloadForUpdate = true;
      registration.waiting.postMessage({type: 'ACTIVATE_UPDATE'});
    } catch {
      reloadForUpdate = false;
      byId('pwa-status').textContent = 'Update paused. Your project is still open; try again later.';
    } finally {
      updating = false;
      byId('pwa-update-button').disabled = false;
    }
  }

  byId('pwa-install').addEventListener('click', install);
  byId('pwa-info').addEventListener('click', showGuide);
  byId('close-install').addEventListener('click', () => byId('install-dialog').close());
  byId('pwa-update-button').addEventListener('click', update);
  displayMode.addEventListener('change', renderState);
  window.addEventListener('online', renderState);
  window.addEventListener('offline', renderState);
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    renderState();
  });
  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    byId('pwa-install').classList.add('hidden');
    byId('pwa-status').textContent = 'Installed. Launch Koma from your home screen.';
    navigator.storage?.persist?.().catch(() => {});
  });

  async function setupOffline() {
    if (!canRegister()) { renderState(); return; }
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloadForUpdate) { reloadForUpdate = false; window.location.reload(); }
      else offerUpdate();
    });
    try {
      registration = await navigator.serviceWorker.register('./sw.js', {
        scope: './', updateViaCache: 'none'
      });
      offerUpdate();
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        worker?.addEventListener('statechange', () => {
          if (worker.state === 'installed') offerUpdate();
          if (worker.state === 'redundant' && !offlineReady) {
            setupFailed = true;
            renderState();
          }
        });
      });
      await navigator.serviceWorker.ready;
      offlineReady = true;
      offerUpdate();
      renderState();
    } catch {
      setupFailed = true;
      renderState();
    }
  }

  renderState();
  if (document.readyState === 'complete') setupOffline();
  else window.addEventListener('load', setupOffline, {once: true});
})();
