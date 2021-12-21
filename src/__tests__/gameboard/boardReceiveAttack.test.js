import boardReceiveAttack from '../../gameboard/boardReceiveAttack';

const testBattleshipObject = {
  id: null,
  type: 'Battleship',
  ship: ['[1][0]', '[1][1]', '[1][2]', '[1][3]'],
  custom: {},
  shipIsHit(coords) {
    const index = this.ship.findIndex((value) => value === coords);

    if (index >= 0) {
      this.ship[index] = '[-][-]';
    }
  }
};

const testBoardObject = {
  board: [
    [
      { vessel: null },
      { selected: false, status: { hit: false, missed: false }, vessel: null },
      { selected: false, status: { hit: false, missed: false }, vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null }
    ],
    [
      {
        selected: false,
        status: { hit: false, missed: false },
        vessel: testBattleshipObject
      },
      {
        selected: false,
        status: { hit: false, missed: false },
        vessel: testBattleshipObject
      },
      {
        selected: false,
        status: { hit: false, missed: false },
        vessel: testBattleshipObject
      },
      {
        selected: false,
        status: { hit: false, missed: false },
        vessel: testBattleshipObject
      },
      { selected: false, status: { hit: false, missed: false }, vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null }
    ]
  ],
  properties: {
    stats: {
      attempts: {
        total: 0,
        hits: 0,
        misses: 0
      }
    }
  }
};

const testBattleshipObjectBoardReceiveAttack = [
  '[1][0]',
  '[1][1]',
  '[-][-]',
  '[1][3]'
];

const testBoardReceiveAttackCallFunction = (coordsY, coordsX) =>
  boardReceiveAttack.call(testBoardObject, coordsY, coordsX);

test('find the ship on the board then trigger the ship hit function', () => {
  testBoardReceiveAttackCallFunction(1, 2);
  expect(testBattleshipObject.ship).toStrictEqual(
    testBattleshipObjectBoardReceiveAttack
  );
});

test('selected should be set to true and the status of hit or missed should either be true or false', () => {
  testBoardReceiveAttackCallFunction(0, 1);
  expect(testBoardObject.board[0][1].selected).toBe(true);
  expect(testBoardObject.board[0][1].status.missed).toBe(true);
  expect(testBoardObject.board[0][1].status.hit).toBe(false);
});

test('properties stats should be updated according to misses and hits', () => {
  expect(testBoardObject.properties.stats.attempts.total).toBe(2);
  expect(testBoardObject.properties.stats.attempts.hits).toBe(1);
  expect(testBoardObject.properties.stats.attempts.misses).toBe(1);
});
