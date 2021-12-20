import cellBuild from '../../gameboard/boardCell';

const testCellPropertyFunction = () => 'dark souls';

const testCellCustomPrototype = {
  anime: 'one piece',
  movie: 'harry potter',
  testCellPropertyFunction
};

test('return default(cell) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(cellBuild(null, testCellCustomPrototype))
  ).toStrictEqual(testCellCustomPrototype);
});
