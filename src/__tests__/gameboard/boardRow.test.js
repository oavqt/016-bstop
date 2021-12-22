import boardRowBuild from '../../gameboard/boardRow';

const testBoardCellObject = {
  coords: { cell: null, display: null },
  selected: false,
  status: { hit: false, missed: false },
  ship: null,
  custom: {}
};

test('return array with a length of 10', () => {
  expect(boardRowBuild()).toHaveLength(10);
});

test('return array with a length of 10 containing 10 testCells', () => {
  boardRowBuild().forEach((boardCellObject) => {
    expect(boardCellObject).toStrictEqual(testBoardCellObject);
  });
});
