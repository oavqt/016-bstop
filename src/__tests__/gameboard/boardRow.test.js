import boardRowBuild from '../../gameboard/boardRow';

const testBoardCellObject = {
  coords: { cell: null, display: null },
  selected: false,
  status: { isHit: false, isMissed: false },
  ship: null,
  custom: {}
};

test('return array with a length of 10', () => {
  expect(boardRowBuild(10, null, null)).toHaveLength(10);
});

test('return array with a length of 12', () => {
  expect(boardRowBuild(12, null, null)).toHaveLength(12);
});

test('return array with a length of 10 containing 10 testBoardCellObject', () => {
  boardRowBuild(10, null, null).forEach((boardCellObject) => {
    expect(boardCellObject).toStrictEqual(testBoardCellObject);
  });
});
