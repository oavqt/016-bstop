import isStatus from '../../ship/shipStatus';

const locumObject = {
  locumAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  locumAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] }
};
const locumFunction = (object) => isStatus.call(object);

test('true, ship should be annihilated', () => {
  expect(locumFunction(locumObject.locumAnnihilated)).toBe(true);
});

test('false, ship should be alive', () => {
  expect(locumFunction(locumObject.locumAlive)).toBe(false);
});
