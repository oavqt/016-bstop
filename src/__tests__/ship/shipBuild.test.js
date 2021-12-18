import build from '../../ship/shipBuild';
import isHit from '../../ship/shipHit';
import isStatus from '../../ship/shipStatus';

const testCarrier = {
  type: 'Carrier',
  ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleship = {
  type: 'Battleship',
  ship: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyer = {
  type: 'Destroyer',
  ship: ['[][]', '[][]', '[][]'],
  custom: {}
};

const testPrototype = {
  isHit,
  isStatus
};

const testPropertyFunction = () => 'Dark Souls';

const testProperties = {
  testAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] },
  testPropertyFunction
};

const testCustomPrototype = {
  isHit,
  isStatus,
  testAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] },
  testPropertyFunction
};

test('return default(battleship) with a default(isHit, isStatus) prototype', () => {
  const battleship = build();
  expect(battleship).toStrictEqual(testBattleship);
  expect(Object.getPrototypeOf(battleship)).toStrictEqual(testPrototype);
});

test('return destroyer with a default(isHit, isStatus) prototype', () => {
  const destroyer = build('destroyer');
  expect(destroyer).toStrictEqual(testDestroyer);
  expect(Object.getPrototypeOf(destroyer)).toStrictEqual(testPrototype);
});

test('return carrier with a custom prototype passed in as an object', () => {
  const carrier = build('carrier', testProperties);
  expect(carrier).toStrictEqual(testCarrier);
  expect(Object.getPrototypeOf(carrier)).toStrictEqual(testCustomPrototype);
});
