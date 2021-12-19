import gridPlace from '../../gameboard/boardGridProtoFn';

const testBoardObject = {
  board: [
    [
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null }
    ],
    [
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null }
    ],
    [
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null }
    ]
  ]
};

const testCarrierObject = {
  type: 'Carrier',
  ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleshipObject = {
  type: 'Battleship',
  ship: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyerObject = {
  type: 'Destroyer',
  ship: ['[][]', '[][]', '[][]'],
  custom: {}
};

const testGridPlaceCallFunction = (coordsY, coordsX, shipObject, direction) =>
  gridPlace.call(testBoardObject, coordsY, coordsX, shipObject, direction);

test('expect the horizontal(x) coordinates([i][i]) vessel value to be replaced by a ship object', () => {
  testGridPlaceCallFunction(1, 3, testBattleshipObject);
  expect(testBoardObject.board[1][0].vessel).toStrictEqual(
    testBattleshipObject
  );
  expect(testBoardObject.board[1][1].vessel).toStrictEqual(
    testBattleshipObject
  );
  expect(testBoardObject.board[1][2].vessel).toStrictEqual(
    testBattleshipObject
  );
  expect(testBoardObject.board[1][3].vessel).toStrictEqual(
    testBattleshipObject
  );
});

test('expect the vertical(y) coordinates([i][i]) vessel value to be replaced by a ship object', () => {
  testGridPlaceCallFunction(2, 5, testDestroyerObject, 'up');
  expect(testBoardObject.board[0][5].vessel).toStrictEqual(testDestroyerObject);
  expect(testBoardObject.board[1][5].vessel).toStrictEqual(testDestroyerObject);
  expect(testBoardObject.board[2][5].vessel).toStrictEqual(testDestroyerObject);
});

test('expect false to be returned if a ship object is already occupying the selected coordinates(x)', () => {
  expect(testGridPlaceCallFunction(1, 7, testCarrierObject)).toBe(false);
});

test('expect false to be returned if a ship object is already occupying the selected coordinates(y)', () => {
  expect(testGridPlaceCallFunction(2, 3, testCarrierObject, 'up')).toBe(false);
});
