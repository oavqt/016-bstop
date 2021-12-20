import shipBuild from '../../ship/shipBuild';
import shipIsHit from '../../ship/shipHit';
import shipIsStatus from '../../ship/shipStatus';

const testCarrierObject = {
  id: null,
  type: 'Carrier',
  ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleshipObject = {
  id: null,
  type: 'Battleship',
  ship: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyerObject = {
  id: null,
  type: 'Destroyer',
  ship: ['[][]', '[][]', '[][]'],
  custom: {}
};

const testShipPrototype = {
  shipIsHit,
  shipIsStatus
};

const testShipPropertyFunction = () => 'dark souls';

const testShipProperties = {
  testAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] },
  testShipPropertyFunction
};

const testShipCustomPrototype = {
  shipIsHit,
  shipIsStatus,
  testAnnihilated: {
    ship: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { ship: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] },
  testShipPropertyFunction
};

test('return default(battleship) with a default(isHit, isStatus) prototype', () => {
  const battleship = shipBuild();
  expect(battleship).toStrictEqual(testBattleshipObject);
  expect(Object.getPrototypeOf(battleship)).toStrictEqual(testShipPrototype);
});

test('return destroyer with a default(isHit, isStatus) prototype', () => {
  const destroyer = shipBuild('destroyer');
  expect(destroyer).toStrictEqual(testDestroyerObject);
  expect(Object.getPrototypeOf(destroyer)).toStrictEqual(testShipPrototype);
});

test('return carrier with a custom prototype passed in as an object', () => {
  const carrier = shipBuild('carrier', null, testShipProperties);
  expect(carrier).toStrictEqual(testCarrierObject);
  expect(Object.getPrototypeOf(carrier)).toStrictEqual(testShipCustomPrototype);
});
