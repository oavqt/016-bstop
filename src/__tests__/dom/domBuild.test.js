/** *@jest-environment jsdom */

import domBuild from '../../dom/domBuild';

describe('domBuild.board', () => {
  test('return a div with a class name of (gridName__grid) and (gridLenght x rowLength) child elements', () => {
    const testBoardElement = domBuild.board('main', 10, 10);

    expect(testBoardElement.className).toBe('main__grid');
    expect(testBoardElement.childElementCount).toBe(100);
  });
});
