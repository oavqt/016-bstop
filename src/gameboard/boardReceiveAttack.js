import pubsub from '../tools/pubsub';

function boardReceiveAttack(boardObject, coords) {
  const [coordsY, coordsX] = coords;
  const boardCellObject = boardObject.board[coordsY][coordsX];
  const boardShipObject = boardCellObject.ship;

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
