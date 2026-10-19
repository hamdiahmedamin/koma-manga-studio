'use strict';

// package_pwa.py changes this version whenever an app-shell file changes.
const VERSION = 'd36a9c335535e4b4';
const PREFIX = 'koma-shell:' + self.registration.scope + ':';
const CACHE = PREFIX + VERSION;
const FILES = [
  './', './index.html', './ui-components.css', './vendor/webawesome.js',
  './vendor/webawesome.css', './vendor/WEB-AWESOME-LICENSE.md', './pwa.js',
  './book-store.js',
  './image-tools.js', './book-output.js', './manifest.webmanifest',
  './icons/app-192.png', './icons/app-512.png',
  './icons/maskable-512.png', './icons/apple-touch-icon.png'
];
const URLS = FILES.map(path => new URL(path, self.registration.scope).href);
const SHELL = new Set(URLS);
const INDEX = new URL('./index.html', self.registration.scope).href;

self.addEventListener('install', event => {
  // A failed download fails installation; the previous worker stays available.
  event.waitUntil(caches.open(CACHE).then(cache =>
    cache.addAll(URLS.map(url => new Request(url, {cache: 'reload'})))
  ));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(PREFIX) && name !== CACHE) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  // Existing editors update only after the user saves and chooses Update app.
  if (event.data?.type === 'ACTIVATE_UPDATE') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== new URL(self.registration.scope).origin) return;
  url.search = '';
  url.hash = '';
  // Only the known, public app shell is cached. Photos, projects and arbitrary
  // same-origin requests never enter this cache.
  if (!SHELL.has(url.href)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(request.mode === 'navigate' ? INDEX : url.href);
    if (cached) return cached;
    try { return await fetch(request); }
    catch {
      if (request.mode === 'navigate') return new Response(
        '<!doctype html><meta name="viewport" content="width=device-width"><title>Koma is offline</title><main style="font:16px system-ui;padding:32px"><h1>Connect once to finish setup.</h1><p>Your saved projects stay on this device. Reopen Koma when you have an internet connection.</p><button onclick="location.reload()">Try again</button></main>',
        {status: 503, headers: {'Content-Type': 'text/html; charset=utf-8'}}
      );
      return Response.error();
    }
  })());
});
