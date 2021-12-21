import pubsub from '../tools/pubsub';

function gridPlace(coordsY, coordsX, shipObject, direction = 'left') {
  const shipLength = shipObject.ship.length;

  const shipX = coordsX - shipLength;
  const shipY = coordsY - shipLength;

  const vessels = [];

  if (direction === 'up') {
    if (shipY < -1) return false;
    for (let i = coordsY; i > shipY; i -= 1)
      if (this.board[i][coordsX].vessel !== null) return false;
      else vessels.push(this.board[i][coordsX]);
  } else {
    if (shipX < -1) return false;
    for (let i = coordsX; i > shipX; i -= 1)
      if (this.board[coordsY][i].vessel !== null) return false;
      else vessels.push(this.board[coordsY][i]);
  }

  vessels.forEach((coords) => {
    const property = coords;
    property.vessel = shipObject;
  });

  this.properties.stats.ships.alive += 1;
  this.properties.stats.ships.total += 1;

  pubsub.publish('shipCoordinates', vessels);

  return true;
}

export default gridPlace;
