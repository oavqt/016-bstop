import pubsub from '../tools/pubsub';
import './boardStatsUpdate';
import '../dom/domStyle';
import '../ship/shipObjectCoordinates';

function boardGridPlace(
  boardObject,
  shipObject,
  coords,
  direction = 'left',
  jest = false
) {
  const { board } = boardObject;
  const shipLength = shipObject.layout.length;
  const [coordsY, coordsX] = coords;

  const shipX = coordsX - shipLength;
  const shipY = coordsY - shipLength;

  const shipCoordinates = [];

  if (direction === 'up') {
    if (shipY < -1) return false;
    for (let iY = coordsY; iY > shipY; iY -= 1)
      if (board[iY][coordsX].ship !== null) return false;
      else {
        shipCoordinates.push([iY, coordsX]);
      }
  } else {
    if (shipX < -1) return false;
    for (let iX = coordsX; iX > shipX; iX -= 1)
      if (board[coordsY][iX].ship !== null) return false;
      else {
        shipCoordinates.push([coordsY, iX]);
      }
  }
  shipCoordinates.forEach(([iY, iX]) => {
    board[iY][iX].ship = shipObject;
  });

  if (!jest) {
    pubsub.publish('shipObjectCoordinates', [boardObject, shipCoordinates]);
    pubsub.publish('boardStatsUpdateShips', [boardObject, 1]);
    pubsub.publish('boardGridPlaceDOMStyleAddShip', [
      boardObject,
      shipCoordinates
    ]);
  }

  return true;
}

export default boardGridPlace;
