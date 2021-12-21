import boardCellObject from '../../gameboard/boardCellObject';

const testCellObject = {
  coords: { cell: null, display: null },
  selected: false,
  status: { hit: false, missed: false },
  ship: null,
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
  ship: null,
  custom: {
    anime: 'one piece',
    movie: 'harry potter',
    testCellPropertyFunction
  }
};

test('return a cell object', () => {
  expect(boardCellObject()).toStrictEqual(testCellObject);
});

test('return a cell object with custom properties passed in as an object', () => {
  expect(boardCellObject(testCellProperties)).toStrictEqual(
    testCustomCellObject
  );
});
