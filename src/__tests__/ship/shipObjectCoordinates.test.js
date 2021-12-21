import shipObjectCoordinates from '../../ship/shipObjectCoordinates';

const testCarrierObject = {
  id: null,
  type: 'Carrier',
  layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testCarrierObjectCoordinates = {
  id: null,
  type: 'Carrier',
  layout: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]'],
  custom: {}
};

const testCellObjects = [
  { coords: { cell: '[0][0]' }, ship: testCarrierObject },
  { coords: { cell: '[0][1]' }, ship: testCarrierObject },
  { coords: { cell: '[0][2]' }, ship: testCarrierObject },
  { coords: { cell: '[0][3]' }, ship: testCarrierObject },
  { coords: { cell: '[0][4]' }, ship: testCarrierObject }
];

test('insert cell coordinates into layout', () => {
  shipObjectCoordinates(testCellObjects);
  expect(testCarrierObject).toStrictEqual(testCarrierObjectCoordinates);
});
