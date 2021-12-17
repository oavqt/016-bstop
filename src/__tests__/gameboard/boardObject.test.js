import board from '../../gameboard/boardObject';

const cases = [
  ['0', '[0][0]'],
  ['3', '[3][3]'],
  ['6', '[6][9]'],
  ['7', '[7][7]'],
  ['9', '[9][9]']
];

test.each(cases)('should return gameboard object', (index, coords) => {
  const wood = board.layout.default();
  expect(wood.board[index]).toEqual(expect.arrayContaining([coords]));
});
