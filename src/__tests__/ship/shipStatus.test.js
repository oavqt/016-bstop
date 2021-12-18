import shipIsStatus from '../../ship/shipStatus';

const testShipObject = {
  testAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] }
};
const testShipIsStatusCallFunction = (shipObject) =>
  shipIsStatus.call(shipObject);

test('true, return annihilated', () => {
  expect(testShipIsStatusCallFunction(testShipObject.testAnnihilated)).toBe(
    true
  );
});

test('false, return alive', () => {
  expect(testShipIsStatusCallFunction(testShipObject.testAlive)).toBe(false);
});
