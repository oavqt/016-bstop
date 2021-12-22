import boardCellObjectBuild from '../../gameboard/boardCellObjectBuild';

const testBoardCellObjectProtoPropertiesFunction = () => 'dark souls';

const testBoardCellObjectProtoProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testBoardCellObjectProtoPropertiesFunction
};

test('return default(cell) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(
      boardCellObjectBuild(null, testBoardCellObjectProtoProperties)
    )
  ).toStrictEqual(testBoardCellObjectProtoProperties);
});
