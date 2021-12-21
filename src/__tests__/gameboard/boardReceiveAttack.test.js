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
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null }
    ],
    [
      { vessel: testBattleshipObject },
      { vessel: testBattleshipObject },
      { vessel: testBattleshipObject },
      { vessel: testBattleshipObject },
      { vessel: null },
      { vessel: null },
      { vessel: null },
      { vessel: null }
    ]
  ]
};

const testBattleshipObjectBoardReceiveAttack = [
  '[1][0]',
  '[1][1]',
  '[-][-]',
  '[1][3]'
];

const testBoardReceiveAttackCallFunction = (coordsY, coordsX) =>
  boardReceiveAttack.call(testBoardObject, coordsY, coordsX);

test('find the ship on the board and then trigger the ship hit function', () => {
  testBoardReceiveAttackCallFunction(1, 2);
  expect(testBattleshipObject.ship).toStrictEqual(
    testBattleshipObjectBoardReceiveAttack
  );
});
