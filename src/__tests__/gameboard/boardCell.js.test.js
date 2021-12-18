import cell from '../../gameboard/boardCell';

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

const testPropertyFunction = () => 'Dark Souls';

const testProperties = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testPropertyFunction
};

const testCustomCell = {
  coords: { cell: null, display: null },
  state: {
    active: true,
    empty: true,
    selected: false,
    status: { hit: false, missed: false }
  },
  vessel: null,
  custom: {
    anime: 'One Piece',
    movie: 'Harry Potter',
    testPropertyFunction
  }
};

test('return a cell object', () => {
  expect(cell()).toStrictEqual(testCell);
});

test('return a cell object with custom properties passed in as an object', () => {
  expect(cell(testProperties)).toStrictEqual(testCustomCell);
});
