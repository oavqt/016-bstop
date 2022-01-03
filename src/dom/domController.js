import domBoard from './domBoard';
import domQuery from '../tools/domQuery';
import domSkeleton from './domSkeleton';

import pubsub from '../tools/pubsub';
import '../game/gameController';

const domController = {
  build: {
    page: () => {
      domController.clear.page();

      domQuery.element.content().appendChild(domSkeleton());
    },
    board: ([position, boardObject]) => {
      const boardObjectID = boardObject.properties.id;
      const boardObjectColumn = boardObject.properties.size.columnLength;
      const boardObjectRow = boardObject.properties.size.rowLength;

      domController.clear.board(position);

      const parent = domQuery.element.board[position]();

      parent.appendChild(
        domBoard(position, boardObjectID, boardObjectColumn, boardObjectRow)
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
