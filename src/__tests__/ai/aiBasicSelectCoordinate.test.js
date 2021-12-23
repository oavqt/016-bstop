import aiBasicSelectCoordinate from '../../ai/aiBasicSelectCoordinate';

const testBoardObject = {
  board: [
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }]
  ]
};

const testBoardObjectSpecific = {
  board: [
    [{ selected: true }, { selected: true }, { selected: true }],
    [{ selected: true }, { selected: true }, { selected: true }],
    [{ selected: true }, { selected: false }, { selected: true }],
    [{ selected: true }, { selected: true }, { selected: true }],
    [{ selected: true }, { selected: true }, { selected: true }]
  ]
};

test('expect the selected property on the randomly selected coordinate to be true', () => {
  const [coordsY, coordsX] = aiBasicSelectCoordinate(testBoardObject);

  expect(testBoardObject.board[coordsY][coordsX].selected).toBe(true);
});

test('expect the selected property on the specific testBoardObjectSpecific coordinate to be true', () => {
  aiBasicSelectCoordinate(testBoardObjectSpecific);

  expect(testBoardObjectSpecific.board[2][1].selected).toBe(true);
});
