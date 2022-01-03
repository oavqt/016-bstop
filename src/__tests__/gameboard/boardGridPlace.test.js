import boardGridPlace from '../../gameboard/boardGridPlace';

const testBoardObject = {
  board: [
    [
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null }
    ],
    [
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null }
    ],
    [
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null },
      { ship: null }
    ]
  ]
};

const testCarrierObject = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Carrier',
  layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleshipObject = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Battleship',
  layout: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyerObject = {
  id: null,
  isHit: false,
  isSunk: false,
  type: 'Destroyer',
  layout: ['[][]', '[][]', '[][]'],
  custom: {}
};

test('expect the horizontal(x) coordinates([i][i]) ship value to be replaced by a ship object', () => {
  boardGridPlace(testBoardObject, testBattleshipObject, [1, 3], 'left', true);
  expect(testBoardObject.board[1][0].ship).toStrictEqual(testBattleshipObject);
  expect(testBoardObject.board[1][1].ship).toStrictEqual(testBattleshipObject);
  expect(testBoardObject.board[1][2].ship).toStrictEqual(testBattleshipObject);
  expect(testBoardObject.board[1][3].ship).toStrictEqual(testBattleshipObject);
});

test('expect the vertical(y) coordinates([i][i]) ship value to be replaced by a ship object', () => {
  boardGridPlace(testBoardObject, testDestroyerObject, [2, 5], 'up', true);
  expect(testBoardObject.board[0][5].ship).toStrictEqual(testDestroyerObject);
  expect(testBoardObject.board[1][5].ship).toStrictEqual(testDestroyerObject);
  expect(testBoardObject.board[2][5].ship).toStrictEqual(testDestroyerObject);
});

test('expect false to be returned if a ship object is already occupying the selected coordinates(x)', () => {
  expect(
    boardGridPlace(testBoardObject, testCarrierObject, [1, 7], 'left', true)
  ).toBe(false);
});

test('expect false to be returned if a ship object is already occupying the selected coordinates(y)', () => {
  expect(
    boardGridPlace(testBoardObject, testCarrierObject, [2, 3], 'up', true)
  ).toBe(false);
});
