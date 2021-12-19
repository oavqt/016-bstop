import shipIsHit from '../../ship/shipHit';

const testShipObject = {
  testAlive: { ship: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]'] }
};

const testCallFunction = (coords) =>
  shipIsHit.call(testShipObject.testAlive, coords);

test('compare values and replace with a hit marker', () => {
  testCallFunction('[0][3]');
  expect(testShipObject.testAlive.ship).toStrictEqual([
    '[0][0]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
  testCallFunction('[0][0]');
  expect(testShipObject.testAlive.ship).toStrictEqual([
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
