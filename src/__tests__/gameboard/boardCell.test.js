import cellBuild from '../../gameboard/boardCell';

const testCellPropertyFunction = () => 'Dark Souls';

const testCellCustomPrototype = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testCellPropertyFunction
};

test('return default(cell) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(cellBuild(null, testCellCustomPrototype))
  ).toStrictEqual(testCellCustomPrototype);
});
