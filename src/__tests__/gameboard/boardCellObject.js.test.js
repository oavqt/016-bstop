import cellObject from '../../gameboard/boardCellObject';

const testCellObject = {
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

const testCellPropertyFunction = () => 'Dark Souls';

const testCellProperties = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testCellPropertyFunction
};

const testCustomCellObject = {
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
    testCellPropertyFunction
  }
};

test('return a cell object', () => {
  expect(cellObject()).toStrictEqual(testCellObject);
});

test('return a cell object with custom properties passed in as an object', () => {
  expect(cellObject(testCellProperties)).toStrictEqual(testCustomCellObject);
});
