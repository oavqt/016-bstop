/** *@jest-environment jsdom */

import dom from '../../dom/dom';

describe('dom.build.board', () => {
  test('return a div with a class name of (gridName__grid) and (gridLenght x rowLength) child elements', () => {
    const testBoardElement = dom.build.board('main', 10, 10);

    expect(testBoardElement.className).toBe('main__grid');
    expect(testBoardElement.childElementCount).toBe(100);
  });
});
