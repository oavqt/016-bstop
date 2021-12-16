import isHit from '../../shipFactory/shipHit';

const locumObject = { ship: ['f4', 'a8', 'd3', 'e6', 'h3'] };
const locumFunction = (coords) => isHit.call(locumObject, coords);

test('compare values and replace with a hit marker', () => {
  locumFunction('e6');
  expect(locumObject.ship).toStrictEqual(['f4', 'a8', 'd3', '--', 'h3']);
});

test('compare values and replace with a hit marker', () => {
  locumFunction('f4');
  expect(locumObject.ship).toStrictEqual(['--', 'a8', 'd3', '--', 'h3']);
});

test('parameter not found on this.ship', () => {
  expect(locumFunction('vW')).toBe('coords not found');
});

test('parameter found on this.ship', () => {
  expect(locumFunction('a8')).toBe('success');
});
