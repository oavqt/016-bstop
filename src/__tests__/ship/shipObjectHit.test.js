import shipObjectHit from '../../ship/shipObjectHit';

const testShipObject = {
  layout: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]']
};

test('compare values and replace with a hit marker', () => {
  shipObjectHit(testShipObject, '[0][3]');
  expect(testShipObject.layout).toStrictEqual([
    '[0][0]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
  shipObjectHit(testShipObject, '[0][0]');
  expect(testShipObject.layout).toStrictEqual([
    '[-][-]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
});

test('parameter not found on this.ship', () => {
  expect(shipObjectHit(testShipObject, '[0][1][2]')).toBe('coords not found');
});

test('parameter found on this.ship', () => {
  expect(shipObjectHit(testShipObject, '[0][2]')).toBe('success');
});
