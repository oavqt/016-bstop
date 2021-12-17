import cell from '../../gameboard/boardCell';

const testCell = {
  coords: { cell: null, display: null },
  options: {},
  state: {
    active: true,
    empty: true,
    selected: false,
    status: { hit: false, missed: false }
  },
  vessel: null
};

const testPropertyFunction = () => 'Dark Souls';

const testOptions = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testPropertyFunction
};

const testCustomCell = {
  coords: { cell: null, display: null },
  options: {
    anime: 'One Piece',
    movie: 'Harry Potter',
    testPropertyFunction
  },
  state: {
    active: true,
    empty: true,
    selected: false,
    status: { hit: false, missed: false }
  },
  vessel: null
};

test('return a cell object', () => {
  expect(cell()).toStrictEqual(testCell);
});

test('return a cell object with custom properties passed in as an object', () => {
  expect(cell(testOptions)).toStrictEqual(testCustomCell);
});
