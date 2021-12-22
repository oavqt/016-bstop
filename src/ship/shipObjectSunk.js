import pubsub from '../tools/pubsub';

function shipObjectSunk(boardObject, coords) {
  const [coordsY, coordsX] = coords;

  const boardCellObject = boardObject.board[coordsY][coordsX];
  const shipObject = boardCellObject.ship;
  const shipObjectLayout = shipObject.layout;

  const status = shipObjectLayout.every((item) => item === '[-][-]');
  if (status === true) pubsub.publish('boardStatsUpdateShips', -1);

  return status;
}

pubsub.subscribe('shipHit', shipObjectSunk);

export default shipObjectSunk;
