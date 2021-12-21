import gridPlace from '../../gameboard/boardGridPlace';

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
  ],
  properties: {
    stats: {
      ships: {
        total: 0,
        alive: 0,
        destroyed: 0
      }
    }
  }
};

const testCarrierObject = {
  id: null,
  type: 'Carrier',
  ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testBattleshipObject = {
  id: null,
  type: 'Battleship',
  ship: ['[][]', '[][]', '[][]', '[][]'],
  custom: {}
};

const testDestroyerObject = {
  id: null,
  type: 'Destroyer',
  ship: ['[][]', '[][]', '[][]'],
  custom: {}
};

const testGridPlaceCallFunction = (coordsY, coordsX, shipObject, direction) =>
  gridPlace.call(testBoardObject, coordsY, coordsX, shipObject, direction);

test('expect the horizontal(x) coordinates([i][i]) vessel value to be replaced by a ship object and, increment the ships total/alive counter', () => {
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
  expect(testBoardObject.properties.stats.ships.alive).toBe(1);
  expect(testBoardObject.properties.stats.ships.total).toBe(1);
});

test('expect the vertical(y) coordinates([i][i]) vessel value to be replaced by a ship object and, increment the ships total/alive counter', () => {
  testGridPlaceCallFunction(2, 5, testDestroyerObject, 'up');
  expect(testBoardObject.board[0][5].vessel).toStrictEqual(testDestroyerObject);
  expect(testBoardObject.board[1][5].vessel).toStrictEqual(testDestroyerObject);
  expect(testBoardObject.board[2][5].vessel).toStrictEqual(testDestroyerObject);
  expect(testBoardObject.properties.stats.ships.alive).toBe(2);
  expect(testBoardObject.properties.stats.ships.total).toBe(2);
});

test('expect false to be returned if a ship object is already occupying the selected coordinates(x)', () => {
  expect(testGridPlaceCallFunction(1, 7, testCarrierObject)).toBe(false);
});

test('expect false to be returned if a ship object is already occupying the selected coordinates(y)', () => {
  expect(testGridPlaceCallFunction(2, 3, testCarrierObject, 'up')).toBe(false);
});
