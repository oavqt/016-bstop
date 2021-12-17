import build from '../../ship/shipBuild';
import isHit from '../../ship/shipHit';
import isStatus from '../../ship/shipStatus';

const locumBattleship = {
  type: 'Battleship',
  ship: ['[][]', '[][]', '[][]', '[][]']
};

const locumDestroyer = {
  type: 'Destroyer',
  ship: ['[][]', '[][]', '[][]']
};

const locumCarrier = {
  type: 'Carrier',
  ship: ['[][]', '[][]', '[][]', '[][]', '[][]']
};

const locumPrototype = {
  isHit,
  isStatus
};

const locumFunction = () => 'Cyberpunk 2077';

const locumObject = {
  locumAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  locumAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] },
  locumFunction
};

const locumCustomPrototype = {
  isHit,
  isStatus,
  locumAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  locumAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] },
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
