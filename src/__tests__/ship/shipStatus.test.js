import isStatus from '../../ship/shipStatus';

const testObject = {
  testAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] }
};
const testCallFunction = (object) => isStatus.call(object);

test('true, return annihilated', () => {
  expect(testCallFunction(testObject.testAnnihilated)).toBe(true);
});

test('false, return alive', () => {
  expect(testCallFunction(testObject.testAlive)).toBe(false);
});
