import isHit from '../../shipFactory/shipHit';

const locumObject = { locumAlive: { ship: ['f1', 'f2', 'f3', 'f4', 'f5'] } };
const locumFunction = (coords) => isHit.call(locumObject.locumAlive, coords);

test('compare values and replace with a hit marker', () => {
  locumFunction('f4');
  expect(locumObject.locumAlive.ship).toStrictEqual([
    'f1',
    'f2',
    'f3',
    '--',
    'f5'
  ]);
});

test('compare values and replace with a hit marker', () => {
  locumFunction('f1');
  expect(locumObject.locumAlive.ship).toStrictEqual([
    '--',
    'f2',
    'f3',
    '--',
    'f5'
  ]);
});

test('parameter not found on this.ship', () => {
  expect(locumFunction('vW')).toBe('coords not found');
});

test('parameter found on this.ship', () => {
  expect(locumFunction('f2')).toBe('success');
});
