import isHit from '../../ship/shipHit';

const locumObject = {
  locumAlive: { ship: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]'] }
};
const locumFunction = (coords) => isHit.call(locumObject.locumAlive, coords);

test('compare values and replace with a hit marker', () => {
  locumFunction('[0][3]');
  expect(locumObject.locumAlive.ship).toStrictEqual([
    '[0][0]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
});

test('compare values and replace with a hit marker', () => {
  locumFunction('[0][0]');
  expect(locumObject.locumAlive.ship).toStrictEqual([
    '[-][-]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
});

test('parameter not found on this.ship', () => {
  expect(locumFunction('[0][1][2]')).toBe('coords not found');
});

test('parameter found on this.ship', () => {
  expect(locumFunction('[0][2]')).toBe('success');
});
