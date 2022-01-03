/** *@jest-environment jsdom */
import domBoard from '../../dom/domBoard';

test('return a div with a class name of (gridName__grid) and (gridLenght x rowLength) child elements', () => {
  const testBoardElement = domBoard(null, 'main', 10, 10);

  expect(testBoardElement.className).toBe('main__grid --grid');
  expect(testBoardElement.childElementCount).toBe(100);
});
