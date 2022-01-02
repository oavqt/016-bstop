import pubsub from '../tools/pubsub';

function boardGridPlace(boardObject, shipObject, coords, direction = 'left') {
  const { board } = boardObject;
  const shipLength = shipObject.layout.length;
  const [coordsY, coordsX] = coords;

  const shipX = coordsX - shipLength;
  const shipY = coordsY - shipLength;

  const boardCellObjectArray = [];

  if (direction === 'up') {
    if (shipY < -1) return false;
    for (let i = coordsY; i > shipY; i -= 1)
      if (board[i][coordsX].ship !== null) return false;
      else boardCellObjectArray.push(board[i][coordsX]);
  } else {
    if (shipX < -1) return false;
    for (let i = coordsX; i > shipX; i -= 1)
      if (board[coordsY][i].ship !== null) return false;
      else boardCellObjectArray.push(board[coordsY][i]);
  }

  boardCellObjectArray.forEach((object) => {
    const cellObject = object;
    cellObject.ship = shipObject;
  });

  pubsub.publish('shipObjectCoordinates', boardCellObjectArray);
  pubsub.publish('boardStatsUpdateShips', [boardObject, 1]);

  return true;
}

export default boardGridPlace;
