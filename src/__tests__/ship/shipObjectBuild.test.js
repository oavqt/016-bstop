import shipObjectBuild from '../../ship/shipObjectBuild';

const testCarrierObject = {
  isHit: false,
  isSunk: false,
  type: 'Carrier',
  layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleshipObject = {
  isHit: false,
  isSunk: false,
  type: 'Battleship',
  layout: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyerObject = {
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
  expect(battleship).toMatchObject(testBattleshipObject);
});

test('return destroyer', () => {
  const destroyer = shipObjectBuild('destroyer');
  expect(destroyer).toMatchObject(testDestroyerObject);
});

test('return carrier with a custom prototype passed in as an object', () => {
  const carrier = shipObjectBuild(
    'carrier',
    null,
    testShipObjectProtoProperties
  );
  expect(carrier).toMatchObject(testCarrierObject);
  expect(Object.getPrototypeOf(carrier)).toStrictEqual(
    testShipObjectProtoProperties
  );
});
