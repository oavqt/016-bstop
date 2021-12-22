import boardObjectBuild from '../../gameboard/boardObjectBuild';

const testBoardObjectProtoPropertiesFunction = () => 'dark souls';

const testBoardObjectProtoProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testBoardObjectProtoPropertiesFunction
};

test('return default(board object) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(
      boardObjectBuild(10, 10, null, testBoardObjectProtoProperties, null, null)
    )
  ).toStrictEqual(testBoardObjectProtoProperties);
});
