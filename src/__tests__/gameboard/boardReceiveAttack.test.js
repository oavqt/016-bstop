import boardReceiveAttack from '../../gameboard/boardReceiveAttack';

const testBoardObject = {
  board: [
    [
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: 'test'
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: 'test'
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: 'test'
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: null
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: null
      },
      { selected: false, status: { isHit: false, isMissed: false }, ship: null }
    ],
    [
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: null
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: null
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: null
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: null
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: 'test'
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: 'test'
      },
      {
        selected: false,
        status: { isHit: false, isMissed: false },
        ship: 'test'
      },
      { selected: false, status: { isHit: false, isMissed: false }, ship: null }
    ]
  ]
};

const testTrue = [
  [0, 1],
  [0, 2],
  [1, 4]
];
const testFalse = [
  [0, 4],
  [1, 0],
  [1, 7]
];

test.each(testFalse)(
  'find the ship on the board and selected should be set to true and the status of missed to true and hit to false',
  (coordsY, coordsX) => {
    boardReceiveAttack(testBoardObject, coordsY, coordsX);
    expect(testBoardObject.board[coordsY][coordsX].selected).toBe(true);
    expect(testBoardObject.board[coordsY][coordsX].status.isMissed).toBe(true);
    expect(testBoardObject.board[coordsY][coordsX].status.isHit).toBe(false);
  }
);

test.each(testTrue)(
  'find the ship on the board and selected should be set to true and the status of missed to false and hit to true',
  (coordsY, coordsX) => {
    boardReceiveAttack(testBoardObject, coordsY, coordsX);
    expect(testBoardObject.board[coordsY][coordsX].selected).toBe(true);
    expect(testBoardObject.board[coordsY][coordsX].status.isMissed).toBe(false);
    expect(testBoardObject.board[coordsY][coordsX].status.isHit).toBe(true);
  }
);
