import shipObjectBuild from '../../ship/shipObjectBuild';

const testCarrierObject = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Carrier',
  layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleshipObject = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Battleship',
  layout: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyerObject = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Destroyer',
  layout: ['[][]', '[][]', '[][]'],
  custom: {}
};

const testShipObjectProtoPropertiesFunction = () => 'dark souls';

const testShipObjectProtoProperties = {
  testShipObjectShipwrecked: {
    layout: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testShipObjectStanding: {
    layout: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]']
  },
  testShipObjectProtoPropertiesFunction
};

test('return default(battleship)', () => {
  const battleship = shipObjectBuild();
  expect(battleship).toStrictEqual(testBattleshipObject);
});

test('return destroyer', () => {
  const destroyer = shipObjectBuild('destroyer');
  expect(destroyer).toStrictEqual(testDestroyerObject);
});

test('return carrier with a custom prototype passed in as an object', () => {
  const carrier = shipObjectBuild(
    'carrier',
    null,
    testShipObjectProtoProperties
  );
  expect(carrier).toStrictEqual(testCarrierObject);
  expect(Object.getPrototypeOf(carrier)).toStrictEqual(
    testShipObjectProtoProperties
  );
});
