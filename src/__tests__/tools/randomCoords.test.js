import randomCoords from '../../tools/randomCoords';

const testRandomCoords = [];

test('expect random coordinates between (min and min) to be inserted into a test array', () => {
  for (let i = 0; i < 10; i += 1) testRandomCoords.push(randomCoords(0, 10));

  testRandomCoords.forEach((coords) => {
    const coordsY = coords[0];
    const coordsX = coords[1];

    expect(Number.isSafeInteger(coordsY)).toBe(true);
    expect(coordsY).toBeGreaterThanOrEqual(0);
    expect(coordsY).toBeLessThanOrEqual(10);

    expect(Number.isSafeInteger(coordsX)).toBe(true);
    expect(coordsX).toBeGreaterThanOrEqual(0);
    expect(coordsX).toBeLessThanOrEqual(10);
  });
});
