'use strict';

globalThis.KomaImageTools = (() => {
  const clamp = (n, low, high) => Math.max(low, Math.min(high, n));
  const round = n => Math.round(n * 1000) / 1000;
  function css(n) {
    return `translate(${n.panX || 0}%,${n.panY || 0}%) rotate(${n.rotation}deg) scale(${n.zoom / 100 * (n.flipX ? -1 : 1)},${n.zoom / 100 * (n.flipY ? -1 : 1)})`;
  }
  function pan(start, from, to, size) {
    return {
      zoom: start.zoom,
      panX: round(clamp(start.panX + (to.x - from.x) / size.width * 100, -100, 100)),
      panY: round(clamp(start.panY + (to.y - from.y) / size.height * 100, -100, 100))
    };
  }
  const midpoint = (a, b) => ({x: (a.x + b.x) / 2, y: (a.y + b.y) / 2});
  const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  function pinch(start, from, to, size) {
    const initialDistance = Math.max(1, distance(from[0], from[1]));
    const zoom = clamp(start.zoom * distance(to[0], to[1]) / initialDistance, 100, 250);
    const ratio = zoom / start.zoom;
    const initial = midpoint(from[0], from[1]), current = midpoint(to[0], to[1]);
    const x = (current.x - size.width / 2) - ratio * (initial.x - size.width / 2 - start.panX / 100 * size.width);
    const y = (current.y - size.height / 2) - ratio * (initial.y - size.height / 2 - start.panY / 100 * size.height);
    return {zoom: round(zoom), panX: round(clamp(x / size.width * 100, -100, 100)), panY: round(clamp(y / size.height * 100, -100, 100))};
  }
  return {css, pan, pinch};
})();
