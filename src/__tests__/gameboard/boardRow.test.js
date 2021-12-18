import row from '../../gameboard/boardRow';

const testCell = {
  coords: { cell: null, display: null },
  state: {
    active: true,
    empty: true,
    selected: false,
    status: { hit: false, missed: false }
  },
  vessel: null,
  custom: {}
};

test('return array with a length of 10', () => {
  expect(row()).toHaveLength(10);
});

test('return array with a length of 10 containing 10 testCells', () => {
  row().forEach((object) => {
    expect(object).toStrictEqual(testCell);
  });
});
