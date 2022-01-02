import dom from './dom';
import domQuery from '../tools/domQuery';
import pubsub from '../tools/pubsub';

const domController = {
  build: {
    page: () => {
      domQuery.element.content().appendChild(dom.build.skeleton());
    },
    board: (boardObjectSize) => {
      const [parentName, gridName, gridSize] = boardObjectSize;
      const { columnLength, rowLength } = gridSize;

      const parentBoard = domQuery.element.board[parentName]();
      parentBoard.appendChild(
        dom.build.board(gridName, columnLength, rowLength)
      );
    }
  }
};

pubsub.subscribe('firstPlayerObjectDOMBuildBoard', domController.build.board);
pubsub.subscribe('secondPlayerObjectDOMBuildBoard', domController.build.board);

export default domController;
