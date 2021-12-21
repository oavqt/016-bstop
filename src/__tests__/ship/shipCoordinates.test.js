import shipCoordinates from '../../ship/shipCoordinates';

const testCarrierObject = {
  id: null,
  type: 'Carrier',
  ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testCarrierObjectCoordinates = {
  id: null,
  type: 'Carrier',
  ship: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]'],
  custom: {}
};

const testPubsubShips = [
  { coords: { cell: '[0][0]' }, vessel: testCarrierObject },
  { coords: { cell: '[0][1]' }, vessel: testCarrierObject },
  { coords: { cell: '[0][2]' }, vessel: testCarrierObject },
  { coords: { cell: '[0][3]' }, vessel: testCarrierObject },
  { coords: { cell: '[0][4]' }, vessel: testCarrierObject }
];

test('insert cell coordinates into ship', () => {
  shipCoordinates(testPubsubShips);
  expect(testCarrierObject).toStrictEqual(testCarrierObjectCoordinates);
});
