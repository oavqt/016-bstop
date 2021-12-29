import pubsub from '../tools/pubsub';

function boardReceiveAttack(boardObject, coordsY, coordsX) {
  const boardCellObject = boardObject.board[coordsY][coordsX];
  const boardShipObject = boardCellObject.ship;
  const coords = [coordsY, coordsX];

  boardCellObject.selected = true;

  if (boardShipObject !== null) {
    boardCellObject.status.isHit = true;

    pubsub.publish('shipHit', boardObject, coords);
    pubsub.publish('boardStatsUpdateAttempts', 1);
  } else {
    boardCellObject.status.isMissed = true;

    pubsub.publish('boardStatsUpdateAttempts', -1);
  }
}

export default boardReceiveAttack;
