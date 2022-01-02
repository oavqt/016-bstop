import dom from './dom';
import domQuery from '../tools/domQuery';
import pubsub from '../tools/pubsub';

const domController = {
  build: {
    page: () => {
      domController.clear.page();
      domQuery.element.content().appendChild(dom.build.skeleton());
    },
    board: (boardObjectSize) => {
      const [parentElementName, gridName, gridSize] = boardObjectSize;
      const { columnLength, rowLength } = gridSize;

      domController.clear.board(parentElementName);

      const parentElement = domQuery.element.board[parentElementName]();

      parentElement.appendChild(
        dom.build.board(gridName, columnLength, rowLength)
      );
    }
  },
  clear: {
    page: () => {
      const content = domQuery.element.content();

      while (content.firstChild) content.removeChild(content.lastChild);
    },
    board: (parentElementName) => {
      const parentElement = domQuery.element.board[parentElementName]();

      while (parentElement.firstChild)
        parentElement.removeChild(parentElement.lastChild);
    }
  }
};

pubsub.subscribe('firstPlayerObjectDOMBuildBoard', domController.build.board);
pubsub.subscribe('secondPlayerObjectDOMBuildBoard', domController.build.board);

export default domController;
