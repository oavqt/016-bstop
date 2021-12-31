import boardStatusUpdate from '../../gameboard/boardStatusUpdate';

const testBoardObject = {
  status: {
    isTurn: false,
    isWinner: false
  },
  stats: {
    ships: {
      total: 5,
      shipwrecked: 5,
      standing: 0
    }
  }
};

describe('boardStatusUpdate.isTurn', () => {
  test('return testBoardObject with isTurn set to true', () => {
    expect(boardStatusUpdate.isTurn([testBoardObject, true])).toBe(true);
    expect(testBoardObject.status.isTurn).toBe(true);
  });

  test('return testBoardObject with isTurn set to false', () => {
    expect(boardStatusUpdate.isTurn([testBoardObject, false])).toBe(false);
    expect(testBoardObject.status.isTurn).toBe(false);
  });
});

describe('boardStatusUpdate.isWinner', () => {
  test('if testBoardObject has won the game return true', () => {
    expect(boardStatusUpdate.isWinner(testBoardObject)).toBe(true);
  });

  test('if testBoardObject has not won the game return false', () => {
    testBoardObject.status.isWinner = false;
    testBoardObject.stats.ships.total += 1;

    expect(boardStatusUpdate.isWinner(testBoardObject)).toBe(false);
  });
});
