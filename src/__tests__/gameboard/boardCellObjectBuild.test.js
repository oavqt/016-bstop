import boardCellObjectBuild from '../../gameboard/boardCellObjectBuild';

const testBoardCellObjectPropertiesFunctionCustom = () => 'dark souls';

const testBoardCellObjectPrototypeCustom = {
  anime: 'one piece',
  movie: 'harry potter',
  testBoardCellObjectPropertiesFunctionCustom
};

test('return default(cell) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(
      boardCellObjectBuild(null, testBoardCellObjectPrototypeCustom)
    )
  ).toStrictEqual(testBoardCellObjectPrototypeCustom);
});
