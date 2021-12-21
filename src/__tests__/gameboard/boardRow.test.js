import rowBuild from '../../gameboard/boardRow';

const testCellObject = {
  coords: { cell: null, display: null },
  selected: false,
  status: { hit: false, missed: false },
  vessel: null,
  custom: {}
};

test('return array with a length of 10', () => {
  expect(rowBuild()).toHaveLength(10);
});

test('return array with a length of 10 containing 10 testCells', () => {
  rowBuild().forEach((object) => {
    expect(object).toStrictEqual(testCellObject);
  });
});
