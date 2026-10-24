import { calculatePopupPosition } from './popupPosition';

describe('calculatePopupPosition Utility Tests', () => {
  test('TC1: Desktop screen - centered click opens below with direct left alignment', () => {
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

    // Anchor center is 800 (targetRect center). Direct left is 800 - 150 = 650
    expect(pos.x).toBe(650);
    // Opened below target bottom (310 + 8 = 318)
    expect(pos.y).toBe(318);
    expect(pos.width).toBe(300);
    expect(pos.placement).toBe('below');
    // Direct left and right edges are safely bounded within viewport
    expect(pos.x).toBeGreaterThanOrEqual(12);
    expect(pos.x + pos.width).toBeLessThanOrEqual(1920 - 12);
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
    expect(pos.y).toBeGreaterThanOrEqual(65);
    expect(pos.y + 240).toBeLessThanOrEqual(1080);
  });

  test('TC3: Mobile screen (360x740) - click near left edge clamps left edge to margin without overflow', () => {
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

    // Left edge (pos.x) clamps to minimum margin (12px), NOT offscreen
    expect(pos.x).toBe(12);
    expect(pos.x + pos.width).toBeLessThanOrEqual(360 - 12);
    expect(pos.y).toBe(268); // 260 + 8
    expect(pos.placement).toBe('below');
  });

  test('TC4: Mobile screen (360x740) - click near right edge clamps right edge to margin without overflow', () => {
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

    // Right edge (pos.x + pos.width) should not exceed 360 - 12 = 348
    expect(pos.x).toBe(360 - 300 - 12); // 48
    expect(pos.x + pos.width).toBeLessThanOrEqual(348);
    expect(pos.x).toBeGreaterThanOrEqual(12);
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
    expect(pos.y).toBeGreaterThanOrEqual(65);
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
    expect(pos.x).toBeGreaterThanOrEqual(10);
    expect(pos.x + pos.width).toBeLessThanOrEqual(310);
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

    expect(pos.y).toBeGreaterThanOrEqual(65);
    expect(pos.y + 240).toBeLessThanOrEqual(360);
  });

  test('TC8: Dynamic actual dimensions refinement', () => {
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
    expect(pos.y).toBeGreaterThanOrEqual(65);
  });
});
