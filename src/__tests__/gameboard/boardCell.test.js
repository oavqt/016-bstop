import cellBuild from '../../gameboard/boardCell';
import cellPlace from '../../gameboard/boardCellProto';

const testPrototype = {
  cellPlace
};

test('return default(cell) with a default(place) prototype', () => {
  expect(Object.getPrototypeOf(cellBuild())).toStrictEqual(testPrototype);
});
