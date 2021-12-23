import pubsub from '../tools/pubsub';

function boardGridPlace(
  boardObject,
  shipObject,
  coordsY,
  coordsX,
  direction = 'left'
) {
  const { board } = boardObject;
  const shipLength = shipObject.layout.length;

  const shipX = coordsX - shipLength;
  const shipY = coordsY - shipLength;

  const ships = [];

  if (direction === 'up') {
    if (shipY < -1) return false;
    for (let i = coordsY; i > shipY; i -= 1)
      if (board[i][coordsX].ship !== null) return false;
      else ships.push(board[i][coordsX]);
  } else {
    if (shipX < -1) return false;
    for (let i = coordsX; i > shipX; i -= 1)
      if (board[coordsY][i].ship !== null) return false;
      else ships.push(board[coordsY][i]);
  }

  ships.forEach((coords) => {
    const property = coords;
    property.ship = shipObject;
  });

  pubsub.publish('shipObjectCoordinates', ships);
  pubsub.publish('boardStatsUpdateShips', 1);

  return true;
}

export default boardGridPlace;
