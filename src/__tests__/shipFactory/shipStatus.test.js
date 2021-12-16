import isStatus from '../../shipFactory/shipStatus';

const locumObject = {
  locumAnnihilated: { ship: ['--', '--', '--', '--', '--'] },
  locumAlive: { ship: ['--', '--', '--', 'f4', 'f5'] }
};
const locumFunction = (object) => isStatus.call(object);

test('true, ship should be annihilated', () => {
  expect(locumFunction(locumObject.locumAnnihilated)).toBe(true);
});

test('false, ship should be alive', () => {
  expect(locumFunction(locumObject.locumAlive)).toBe(false);
});
