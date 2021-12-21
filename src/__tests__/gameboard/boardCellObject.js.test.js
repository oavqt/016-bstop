import cellObject from '../../gameboard/boardCellObject';

const testCellObject = {
  coords: { cell: null, display: null },
  selected: false,
  status: { hit: false, missed: false },
  vessel: null,
  custom: {}
};

const testCellPropertyFunction = () => 'dark souls';

const testCellProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testCellPropertyFunction
};

const testCustomCellObject = {
  coords: { cell: null, display: null },
  selected: false,
  status: { hit: false, missed: false },
  vessel: null,
  custom: {
    anime: 'one piece',
    movie: 'harry potter',
    testCellPropertyFunction
  }
};

test('return a cell object', () => {
  expect(cellObject()).toStrictEqual(testCellObject);
});

test('return a cell object with custom properties passed in as an object', () => {
  expect(cellObject(testCellProperties)).toStrictEqual(testCustomCellObject);
});
