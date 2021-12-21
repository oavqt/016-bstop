import shipObjectBuild from '../../ship/shipObjectBuild';

const testCarrierObject = {
  id: null,
  type: 'Carrier',
  layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleshipObject = {
  id: null,
  type: 'Battleship',
  layout: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyerObject = {
  id: null,
  type: 'Destroyer',
  layout: ['[][]', '[][]', '[][]'],
  custom: {}
};

const testShipCustomPrototypeFunction = () => 'dark souls';

const testShipCustomPrototype = {
  testAnnihilated: {
    layout: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  },
  testAlive: { layout: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] },
  testShipCustomPrototypeFunction
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
  const carrier = shipObjectBuild('carrier', null, testShipCustomPrototype);
  expect(carrier).toStrictEqual(testCarrierObject);
  expect(Object.getPrototypeOf(carrier)).toStrictEqual(testShipCustomPrototype);
});
