import boardCellObjectBuild from '../../gameboard/boardCellObjectBuild';

const testCellPropertyFunction = () => 'dark souls';

const testCellCustomPrototype = {
  anime: 'one piece',
  movie: 'harry potter',
  testCellPropertyFunction
};

test('return default(cell) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(boardCellObjectBuild(null, testCellCustomPrototype))
  ).toStrictEqual(testCellCustomPrototype);
});