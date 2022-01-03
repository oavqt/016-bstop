import pubsub from '../tools/pubsub';
import '../gameboard/boardStatsUpdate';
import '../gameboard/boardStatusUpdate';

function shipObjectSunk(boardObject, coords, jest = false) {
  const [coordsY, coordsX] = coords;

  const boardCellObject = boardObject.board[coordsY][coordsX];
  const shipObject = boardCellObject.ship;
  const shipObjectLayout = shipObject.layout;

  const status = shipObjectLayout.every((item) => item === '[-][-]');

  if (status === true && !jest) {
    pubsub.publish('boardStatsUpdateShips', -1);
    pubsub.publish('boardStatusUpdateIsWinnerQuery', boardObject);
  }

  shipObject.isSunk = status;

  return status;
}

pubsub.subscribe('shipHit', shipObjectSunk);

export default shipObjectSunk;
