import { calculatePopupPosition } from './popupPosition';

describe('calculatePopupPosition Utility Tests', () => {
  test('TC1: Desktop screen - centered click opens below with exact alignment', () => {
    const pos = calculatePopupPosition({
      clickX: 800,
      clickY: 300,
      targetRect: { left: 770, right: 830, top: 290, bottom: 310, width: 60, height: 20 },
      viewportWidth: 1920,
      viewportHeight: 1080,
      preferredWidth: 300,
      estimatedHeight: 240,
      margin: 12,
      spacing: 8
    });

    // Centered horizontally around 800 (the center of targetRect): pos.x = 800
    expect(pos.x).toBe(800);
    // Opened below target bottom (310 + 8 = 318)
    expect(pos.y).toBe(318);
    expect(pos.width).toBe(300);
    expect(pos.placement).toBe('below');
    // Bounded within viewport when translated with -translate-x-1/2
    expect(pos.x - pos.width / 2).toBeGreaterThanOrEqual(12);
    expect(pos.x + pos.width / 2).toBeLessThanOrEqual(1920 - 12);
  });

  test('TC2: Desktop screen - click near bottom boundary opens ABOVE target without overflow', () => {
    const pos = calculatePopupPosition({
      clickX: 500,
      clickY: 980,
      targetRect: { left: 480, right: 520, top: 970, bottom: 990, width: 40, height: 20 },
      viewportWidth: 1920,
      viewportHeight: 1080,
      preferredWidth: 300,
      estimatedHeight: 240,
      margin: 12,
      spacing: 8
    });

    // Opens above target top: 970 - 240 - 8 = 722
    expect(pos.y).toBe(722);
    expect(pos.placement).toBe('above');
    expect(pos.y).toBeGreaterThanOrEqual(70);
    expect(pos.y + 240).toBeLessThanOrEqual(1080);
  });

  test('TC3: Mobile screen (360x740) - click near left edge clamps to margin without overflow', () => {
    const pos = calculatePopupPosition({
      clickX: 20,
      clickY: 250,
      targetRect: { left: 10, right: 30, top: 240, bottom: 260, width: 20, height: 20 },
      viewportWidth: 360,
      viewportHeight: 740,
      preferredWidth: 300,
      estimatedHeight: 240,
      margin: 12,
      spacing: 8
    });

    // Left edge (pos.x - pos.width / 2) should clamp to minimum margin (12px), NOT be negative
    expect(pos.x - pos.width / 2).toBeGreaterThanOrEqual(12);
    expect(pos.x + pos.width / 2).toBeLessThanOrEqual(360 - 12);
    expect(pos.y).toBe(268); // 260 + 8
    expect(pos.placement).toBe('below');
  });

  test('TC4: Mobile screen (360x740) - click near right edge clamps to right margin without overflow', () => {
    const pos = calculatePopupPosition({
      clickX: 345,
      clickY: 250,
      targetRect: { left: 335, right: 355, top: 240, bottom: 260, width: 20, height: 20 },
      viewportWidth: 360,
      viewportHeight: 740,
      preferredWidth: 300,
      estimatedHeight: 240,
      margin: 12,
      spacing: 8
    });

    // Right edge should not exceed 360 - 12 = 348
    expect(pos.x + pos.width / 2).toBeLessThanOrEqual(348);
    expect(pos.x - pos.width / 2).toBeGreaterThanOrEqual(12);
    expect(pos.y).toBe(268);
  });

  test('TC5: Mobile screen - click near bottom opens above and clamps safely', () => {
    const pos = calculatePopupPosition({
      clickX: 180,
      clickY: 690,
      targetRect: { left: 160, right: 200, top: 680, bottom: 700, width: 40, height: 20 },
      viewportWidth: 360,
      viewportHeight: 740,
      preferredWidth: 300,
      estimatedHeight: 240,
      margin: 12,
      spacing: 8
    });

    expect(pos.placement).toBe('above');
    expect(pos.y).toBe(680 - 240 - 8); // 432
    expect(pos.y).toBeGreaterThanOrEqual(70);
    expect(pos.y + 240).toBeLessThanOrEqual(740);
  });

  test('TC6: Very narrow screen (320px) - popup width scales down to fit viewport', () => {
    const pos = calculatePopupPosition({
      clickX: 160,
      clickY: 200,
      viewportWidth: 320,
      viewportHeight: 568,
      preferredWidth: 320,
      estimatedHeight: 240,
      margin: 10,
      spacing: 6
    });

    // Maximum available width is 320 - 20 = 300px
    expect(pos.width).toBeLessThanOrEqual(300);
    expect(pos.x - pos.width / 2).toBeGreaterThanOrEqual(10);
    expect(pos.x + pos.width / 2).toBeLessThanOrEqual(310);
  });

  test('TC7: Small landscape viewport (640x360) - popup clamps vertically within safe margins', () => {
    const pos = calculatePopupPosition({
      clickX: 300,
      clickY: 180,
      viewportWidth: 640,
      viewportHeight: 360,
      preferredWidth: 280,
      estimatedHeight: 240,
      margin: 12,
      spacing: 8
    });

    expect(pos.y).toBeGreaterThanOrEqual(70);
    expect(pos.y + 240).toBeLessThanOrEqual(360);
  });

  test('TC8: Dynamic actual dimensions refinement after DOM mount', () => {
    const pos = calculatePopupPosition({
      clickX: 500,
      clickY: 600,
      viewportWidth: 1024,
      viewportHeight: 768,
      actualWidth: 280,
      actualHeight: 180,
      margin: 12,
      spacing: 8
    });

    expect(pos.width).toBe(280);
    // 768 - 600 = 168 < 180 + 8 + 12 = 200, so spaceBelow is not enough -> opens above
    expect(pos.placement).toBe('above');
    expect(pos.y).toBe(600 - 180 - 8); // 412
    expect(pos.y).toBeGreaterThanOrEqual(70);
  });
});
