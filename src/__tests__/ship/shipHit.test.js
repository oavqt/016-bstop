import isHit from '../../ship/shipHit';

const testShip = {
  testAlive: { ship: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]'] }
};
const testCallFunction = (coords) => isHit.call(testShip.testAlive, coords);

test('compare values and replace with a hit marker', () => {
  testCallFunction('[0][3]');
  expect(testShip.testAlive.ship).toStrictEqual([
    '[0][0]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
});

test('compare values and replace with a hit marker', () => {
  testCallFunction('[0][0]');
  expect(testShip.testAlive.ship).toStrictEqual([
    '[-][-]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
});

test('parameter not found on this.ship', () => {
  expect(testCallFunction('[0][1][2]')).toBe('coords not found');
});

test('parameter found on this.ship', () => {
  expect(testCallFunction('[0][2]')).toBe('success');
});
