import shipObjectCoordinates from '../../ship/shipObjectCoordinates';

const testCarrierObject = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Carrier',
  layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testCarrierObjectCoordinates = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Carrier',
  layout: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]'],
  custom: {}
};

const testBoardObject = {
  board: [
    [
      { coords: { cell: '[0][0]' }, ship: testCarrierObject },
      { coords: { cell: '[0][1]' }, ship: testCarrierObject },
      { coords: { cell: '[0][2]' }, ship: testCarrierObject },
      { coords: { cell: '[0][3]' }, ship: testCarrierObject },
      { coords: { cell: '[0][4]' }, ship: testCarrierObject }
    ]
  ]
};

const testShipCoordinates = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4]
];

test('insert cell coordinates into layout', () => {
  shipObjectCoordinates([testBoardObject, testShipCoordinates]);
  expect(testCarrierObject).toStrictEqual(testCarrierObjectCoordinates);
});
