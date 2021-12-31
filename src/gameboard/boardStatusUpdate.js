import pubsub from '../tools/pubsub';

const boardStatusUpdate = {
  isTurn: (boardObjectValueArray) => {
    const [boardObject, value] = boardObjectValueArray;
    const boardObjectStatus = boardObject.status;

    boardObjectStatus.isTurn = value;

    return boardObjectStatus.isTurn;
  },
  isWinner: (boardObject) => {
    const boardObjectStats = boardObject.stats;
    const boardObjectStatus = boardObject.status;

    if (
      boardObjectStats.ships.total === boardObjectStats.ships.shipwrecked &&
      boardObjectStats.ships.standing === 0
    ) {
      boardObjectStatus.isWinner = true;

      pubsub.publish('gameStatusUpdateIsWinner', boardObjectStatus.isWinner);
    }

    return boardObjectStatus.isWinner;
  }
};

pubsub.subscribe('boardStatusUpdateIsTurn', boardStatusUpdate.isTurn);
pubsub.subscribe('boardStatusUpdateIsWinnerQuery', boardStatusUpdate.isWinner);

export default boardStatusUpdate;
