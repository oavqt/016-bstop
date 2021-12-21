import boardRowBuild from '../../gameboard/boardRow';

const testCellObject = {
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
  boardRowBuild().forEach((object) => {
    expect(object).toStrictEqual(testCellObject);
  });
});
