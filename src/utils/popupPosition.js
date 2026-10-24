/**
 * Calculates responsive, bounds-checked popup position for dictionary/word modals.
 * Returns exact `left` (x) and `top` (y) style coordinates in pixels so the popup
 * can be positioned directly without relying on CSS `transform: translateX(-50%)`,
 * preventing any override or collision with CSS animation keyframes (.animate-fadeIn).
 *
 * Ensures the popup opens right next to the clicked word or card and stays perfectly
 * within the screen boundaries across desktop browsers, tablets, and mobile devices (Capacitor/web).
 *
 * @param {Object} params
 * @param {number} [params.clickX] - Viewport X coordinate of click/tap
 * @param {number} [params.clickY] - Viewport Y coordinate of click/tap
 * @param {Object} [params.targetRect] - Bounding rect of the clicked element ({ left, right, top, bottom, width, height })
 * @param {number} [params.preferredWidth=300] - Desired width of popup in pixels
 * @param {number} [params.estimatedHeight=260] - Estimated height of popup before mount
 * @param {number} [params.actualWidth] - Measured width after mount (optional)
 * @param {number} [params.actualHeight] - Measured height after mount (optional)
 * @param {number} [params.viewportWidth] - Viewport innerWidth (defaults to window.innerWidth)
 * @param {number} [params.viewportHeight] - Viewport innerHeight (defaults to window.innerHeight)
 * @param {number} [params.margin=12] - Minimum margin from screen edge in pixels
 * @param {number} [params.spacing=8] - Gap between target and popup in pixels
 * @returns {{ x: number, y: number, width: number, placement: 'below'|'above' }}
 */
export function calculatePopupPosition({
  clickX,
  clickY,
  targetRect,
  preferredWidth = 300,
  estimatedHeight = 260,
  actualWidth,
  actualHeight,
  viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024,
  viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 768,
  margin = 12,
  spacing = 8
} = {}) {
  const safeViewportW = Math.max(260, Number(viewportWidth) || 360);
  const safeViewportH = Math.max(260, Number(viewportHeight) || 640);

  // Popup width is bounded by viewport width minus margins on both sides
  const width = Math.min(actualWidth || preferredWidth, safeViewportW - margin * 2);
  const height = actualHeight || estimatedHeight;

  // Horizontal anchor:
  // Prefer the horizontal center of the clicked target element (card or word span).
  // Fall back to clickX, then to viewport center.
  let anchorX;
  if (targetRect && targetRect.width != null && targetRect.left != null) {
    anchorX = targetRect.left + targetRect.width / 2;
  } else if (clickX != null && !isNaN(clickX) && clickX > 0) {
    anchorX = clickX;
  } else {
    anchorX = safeViewportW / 2;
  }

  // Calculate direct left coordinate to center popup horizontally over anchorX:
  const desiredLeft = anchorX - width / 2;

  // Clamp left so the popup box [left, left + width] stays within [margin, safeViewportW - margin]
  const minLeft = margin;
  const maxLeft = Math.max(minLeft, safeViewportW - width - margin);
  const clampedLeft = Math.min(Math.max(desiredLeft, minLeft), maxLeft);

  // Vertical anchor:
  let refTop;
  let refBottom;
  if (targetRect && targetRect.bottom != null && targetRect.top != null) {
    refTop = targetRect.top;
    refBottom = targetRect.bottom;
  } else if (clickY != null && !isNaN(clickY) && clickY > 0) {
    refTop = clickY;
    refBottom = clickY;
  } else {
    refTop = safeViewportH / 2;
    refBottom = safeViewportH / 2;
  }

  const spaceBelow = safeViewportH - refBottom;
  const spaceAbove = refTop;

  let top;
  let placement = 'below';

  // 1. If sufficient space below target, place below
  if (spaceBelow >= height + spacing + margin) {
    top = refBottom + spacing;
    placement = 'below';
  }
  // 2. Otherwise if sufficient space above target (leaving room for top navbar at ~65px), place above
  else if (spaceAbove >= height + spacing + 65) {
    top = refTop - height - spacing;
    placement = 'above';
  }
  // 3. If neither fits fully outside the target, place where there's more room and clamp safely
  else {
    if (spaceBelow >= spaceAbove) {
      top = Math.max(65, Math.min(safeViewportH - height - margin, refBottom + spacing));
      placement = 'below';
    } else {
      top = Math.max(65, Math.min(safeViewportH - height - margin, refTop - height - spacing));
      placement = 'above';
    }
  }

  return {
    x: Math.round(clampedLeft),
    y: Math.round(top),
    width: Math.round(width),
    placement
  };
}
