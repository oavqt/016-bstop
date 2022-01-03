import pubsub from '../tools/pubsub';
import './boardStatsUpdate';
import '../ship/shipObjectHit';

function boardReceiveAttack(boardObject, coords, jest = false) {
  const [coordsY, coordsX] = coords;
  const boardCellObject = boardObject.board[coordsY][coordsX];
  const boardShipObject = boardCellObject.ship;

  boardCellObject.selected = true;

  if (boardShipObject !== null) {
    boardCellObject.status.isHit = true;

    if (!jest) {
      pubsub.publish('shipHit', boardObject, coords);
      pubsub.publish('boardStatsUpdateAttempts', 1);
    }
  } else {
    boardCellObject.status.isMissed = true;

    if (!jest) pubsub.publish('boardStatsUpdateAttempts', -1);
  }
}

export default boardReceiveAttack;
