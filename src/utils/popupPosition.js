/**
 * Calculates responsive, bounds-checked popup position for dictionary/word modals.
 * Ensures the popup opens right next to the clicked word or card and stays perfectly
 * within the screen boundaries across desktop browsers, tablets, and mobile devices (Capacitor/web).
 *
 * NOTE: The popup element must have `transform: translateX(-50%)` (Tailwind `-translate-x-1/2`)
 * so that `popupPos.x` serves as its exact horizontal center.
 *
 * @param {Object} params
 * @param {number} [params.clickX] - Viewport X coordinate of click/tap
 * @param {number} [params.clickY] - Viewport Y coordinate of click/tap
 * @param {Object} [params.targetRect] - Bounding rect of the clicked element ({ left, right, top, bottom, width, height })
 * @param {number} [params.preferredWidth=300] - Desired width of popup
 * @param {number} [params.estimatedHeight=240] - Realistic estimated height of popup before mount
 * @param {number} [params.actualWidth] - Measured width after mount
 * @param {number} [params.actualHeight] - Measured height after mount
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
  estimatedHeight = 240,
  actualWidth,
  actualHeight,
  viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024,
  viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 768,
  margin = 12,
  spacing = 8
} = {}) {
  const safeViewportW = Math.max(260, Number(viewportWidth) || 360);
  const safeViewportH = Math.max(260, Number(viewportHeight) || 640);

  // Width is bounded by viewport minus 2 * margin
  const width = Math.min(actualWidth || preferredWidth, safeViewportW - margin * 2);
  const height = actualHeight || estimatedHeight;
  const halfWidth = width / 2;

  // Horizontal reference:
  // Prefer the center of the clicked target element (card or word) so it aligns perfectly with the item.
  // Fallback to clickX, then to viewport center.
  let refX;
  if (targetRect && targetRect.width != null && targetRect.left != null) {
    refX = targetRect.left + targetRect.width / 2;
  } else if (clickX != null && !isNaN(clickX) && clickX > 0) {
    refX = clickX;
  } else {
    refX = safeViewportW / 2;
  }

  // Clamp horizontal center so that [refX - halfWidth, refX + halfWidth] never exceeds [margin, safeViewportW - margin]
  const minX = halfWidth + margin;
  const maxX = safeViewportW - halfWidth - margin;
  const clampedX = minX >= maxX ? safeViewportW / 2 : Math.min(Math.max(refX, minX), maxX);

  // Vertical reference:
  const refBottom = targetRect && targetRect.bottom != null ? targetRect.bottom : (clickY || 0);
  const refTop = targetRect && targetRect.top != null ? targetRect.top : (clickY || 0);

  const spaceBelow = safeViewportH - refBottom;
  const spaceAbove = refTop;

  let top;
  let placement = 'below';

  // 1. If sufficient space below target, place below
  if (spaceBelow >= height + spacing + margin) {
    top = refBottom + spacing;
    placement = 'below';
  }
  // 2. Otherwise if sufficient space above target (above navbar at 70px), place above
  else if (spaceAbove >= height + spacing + 70) {
    top = refTop - height - spacing;
    placement = 'above';
  }
  // 3. If neither fits fully outside the target, place where there's more room and clamp between 70px and screen bottom
  else {
    if (spaceBelow >= spaceAbove) {
      top = Math.max(70, Math.min(safeViewportH - height - margin, refBottom + spacing));
      placement = 'below';
    } else {
      top = Math.max(70, Math.min(safeViewportH - height - margin, refTop - height - spacing));
      placement = 'above';
    }
  }

  return {
    x: Math.round(clampedX),
    y: Math.round(top),
    width: Math.round(width),
    placement
  };
}
