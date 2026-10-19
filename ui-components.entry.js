// Only the free controls Koma uses are bundled. No remote loader or icon kit.
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/details/details.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/textarea/textarea.js';
import '@awesome.me/webawesome/dist/components/slider/slider.js';
import '@awesome.me/webawesome/dist/components/switch/switch.js';
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';
import '@awesome.me/webawesome/dist/components/color-picker/color-picker.js';

import '@awesome.me/webawesome/dist/components/dropdown/dropdown.js';
import '@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js';
import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';

import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/progress-bar/progress-bar.js';

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
      if (value === null && host.matches('[slot="trigger"]') && host.closest('wa-dropdown') && ['aria-expanded', 'aria-controls'].includes(name)) continue;
      if (value === null) button.removeAttribute(name);
      else button.setAttribute(name, value);
    }
  };
  new MutationObserver(sync).observe(host, {attributes: true, attributeFilter: buttonAria});
  sync();
}
// Names belong on the real tab list/menu, inside the component's shadow root.
function watchNamedSurface(host) {
  if (watched.has(host)) return;
  watched.add(host);
  const sync = async () => {
    await host.updateComplete;
    const selector = host.localName === 'wa-tab-group' ? '[role="tablist"]' : '[part~="menu"]';
    const surface = host.shadowRoot?.querySelector(selector);
    if (!surface) return;
    const label = host.getAttribute('aria-label');
    if (label) surface.setAttribute('aria-label', label);
    else surface.removeAttribute('aria-label');
  };
  new MutationObserver(sync).observe(host, {attributes: true, attributeFilter: ['aria-label']});
  sync();
}
function connectControls(root) {
  if (root.matches?.('wa-button')) watchButton(root);
  root.querySelectorAll?.('wa-button').forEach(watchButton);
  if (root.matches?.('wa-tab-group,wa-dropdown')) watchNamedSurface(root);
  root.querySelectorAll?.('wa-tab-group,wa-dropdown').forEach(watchNamedSurface);
}
document.addEventListener('DOMContentLoaded', () => {
  connectControls(document);
  new MutationObserver(records => {
    for (const record of records) for (const node of record.addedNodes) {
      if (node.nodeType === 1) connectControls(node);
    }
  }).observe(document.body, {childList: true, subtree: true});
}, {once: true});
