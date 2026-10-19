// Only the free controls Koma uses are bundled. No remote loader or icon kit.
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/details/details.js';

// Koma keeps labels and toggle state on the host for its existing handlers.
// Forward those attributes to the real focusable control inside Web Awesome.
const buttonAria = ['aria-label', 'aria-pressed', 'aria-expanded', 'aria-controls', 'aria-describedby'];
const watched = new WeakSet();
function watchButton(host) {
  if (watched.has(host)) return;
  watched.add(host);
  const sync = async () => {
    await host.updateComplete;
    const button = host.shadowRoot?.querySelector('[part~="button"]');
    if (!button) return;
    for (const name of buttonAria) {
      const value = host.getAttribute(name);
      if (value === null) button.removeAttribute(name);
      else button.setAttribute(name, value);
    }
  };
  new MutationObserver(sync).observe(host, {attributes: true, attributeFilter: buttonAria});
  sync();
}
function connectButtons(root) {
  if (root.matches?.('wa-button')) watchButton(root);
  root.querySelectorAll?.('wa-button').forEach(watchButton);
}
document.addEventListener('DOMContentLoaded', () => {
  connectButtons(document);
  new MutationObserver(records => {
    for (const record of records) for (const node of record.addedNodes) {
      if (node.nodeType === 1) connectButtons(node);
    }
  }).observe(document.body, {childList: true, subtree: true});
}, {once: true});
