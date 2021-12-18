import cellPlace from '../../gameboard/boardCellProto';

const testCellObject = { vessel: null };

const testBattleshipObject = {
  type: 'Battleship',
  ship: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testCellPlaceCallFunction = (shipObject) =>
  cellPlace.call(testCellObject, shipObject);

test('expect the vessel value to be replaced by a ship object', () => {
  testCellPlaceCallFunction(testBattleshipObject);
  expect(testCellObject.vessel).toStrictEqual(testBattleshipObject);
});
