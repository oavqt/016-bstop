import build from '../../shipFactory/shipBuild';
import isHit from '../../shipFactory/shipHit';
import isStatus from '../../shipFactory/shipStatus';

const locumBattleship = {
  type: 'Battleship',
  ship: ['ln', 'ln', 'ln', 'ln']
};

const locumDestroyer = {
  type: 'Destroyer',
  ship: ['ln', 'ln', 'ln']
};

const locumCarrier = {
  type: 'Carrier',
  ship: ['ln', 'ln', 'ln', 'ln', 'ln']
};

const locumPrototype = {
  isHit,
  isStatus
};

const locumFunction = () => 'Cyberpunk 2077';

const locumObject = {
  locumAnnihilated: { ship: ['--', '--', '--', '--', '--'] },
  locumAlive: { ship: ['--', '--', '--', 'f4', 'f5'] },
  locumFunction
};

const locumCustomPrototype = {
  isHit,
  isStatus,
  locumAnnihilated: { ship: ['--', '--', '--', '--', '--'] },
  locumAlive: { ship: ['--', '--', '--', 'f4', 'f5'] },
  locumFunction
};

test('should return default(battleship) with default(isHit, isStatus) prototype', () => {
  const battleship = build();
  expect(battleship).toStrictEqual(locumBattleship);
  expect(Object.getPrototypeOf(battleship)).toStrictEqual(locumPrototype);
});

test('should return destroyer with default(isHit, isStatus) prototype', () => {
  const destroyer = build('destroyer');
  expect(destroyer).toStrictEqual(locumDestroyer);
  expect(Object.getPrototypeOf(destroyer)).toStrictEqual(locumPrototype);
});

test('should return carrier with custom prototype', () => {
  const carrier = build('carrier', locumObject);
  expect(carrier).toStrictEqual(locumCarrier);
  expect(Object.getPrototypeOf(carrier)).toStrictEqual(locumCustomPrototype);
});
