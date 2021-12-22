import boardCellObject from '../../gameboard/boardCellObject';

const testBoardCellObject = {
  coords: { cell: null, display: null },
  selected: false,
  status: { hit: false, missed: false },
  ship: null,
  custom: {}
};

const testBoardCellObjectPropertiesFunctionCustom = () => 'dark souls';

const testBoardCellObjectProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testBoardCellObjectPropertiesFunctionCustom
};

const testBoardCellObjectCustom = {
  coords: { cell: null, display: null },
  selected: false,
  status: { hit: false, missed: false },
  ship: null,
  custom: {
    anime: 'one piece',
    movie: 'harry potter',
    testBoardCellObjectPropertiesFunctionCustom
  }
};

test('return a cell object', () => {
  expect(boardCellObject()).toStrictEqual(testBoardCellObject);
});

test('return a cell object with custom properties passed in as an object', () => {
  expect(boardCellObject(testBoardCellObjectProperties)).toStrictEqual(
    testBoardCellObjectCustom
  );
});
