import isStatus from '../../ship/shipStatus';

const testShip = {
  testAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] }
};
const testCallFunction = (object) => isStatus.call(object);

test('true, return annihilated', () => {
  expect(testCallFunction(testShip.testAnnihilated)).toBe(true);
});

test('false, return alive', () => {
  expect(testCallFunction(testShip.testAlive)).toBe(false);
});
