import boardGridBuild from '../../gameboard/boardGrid';

test('return board array with a lenght of 10', () => {
  expect(boardGridBuild(10, 10, null, null)).toHaveLength(10);
});

test('return board array with a lenght of 12', () => {
  expect(boardGridBuild(12, 12, null, null)).toHaveLength(12);
});
