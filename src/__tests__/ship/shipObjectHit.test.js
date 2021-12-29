import shipObjectHit from '../../ship/shipObjectHit';

const testBoardCellObject = {
  ship: {
    isHit: false,
    layout: ['[0][0]', '[0][1]', '[0][2]', '[0][3]', '[0][4]']
  }
};

const testBoardObject = {
  board: [
    [
      testBoardCellObject,
      testBoardCellObject,
      testBoardCellObject,
      testBoardCellObject,
      testBoardCellObject
    ]
  ]
};

test('compare values and replace with a hit marker', () => {
  shipObjectHit(testBoardObject, [0, 3]);
  expect(testBoardObject.board[0][3].ship.layout).toStrictEqual([
    '[0][0]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
  shipObjectHit(testBoardObject, [0, 0]);
  expect(testBoardObject.board[0][0].ship.layout).toStrictEqual([
    '[-][-]',
    '[0][1]',
    '[0][2]',
    '[-][-]',
    '[0][4]'
  ]);
});

test('ships isHit property to be set to true', () => {
  expect(testBoardCellObject.ship.isHit).toBe(true);
});
