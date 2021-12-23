import aiSelectCoordinate from '../../ai/aiSelectCoordinate';

const testBoardObject = {
  board: [
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }],
    [{ selected: false }, { selected: false }, { selected: false }]
  ]
};

test('expect the selected property on the randomly selected coordinate to be true', () => {
  const [coordsY, coordsX] = aiSelectCoordinate();

  expect(testBoardObject[coordsY][coordsX].selected).toBe(true);
});
