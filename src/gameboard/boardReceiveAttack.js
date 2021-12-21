import pubsub from '../tools/pubsub';

function boardReceiveAttack(boardObject, coordsY, coordsX) {
  const boardCellObject = boardObject[coordsY][coordsX];
  const coords = `[${coordsY}][${coordsX}]`;

  boardCellObject.selected = true;

  if (boardCellObject.ship !== null) {
    boardCellObject.status.hit = true;

    pubsub.publish('hit', boardCellObject, coords);
    pubsub.publish('boardStatsAttempts', { total: 1, hits: 1, misses: 0 });
  } else {
    boardCellObject.status.missed = true;

    pubsub.publish('boardStatsAttempts', { total: 1, hits: 0, misses: 1 });
  }
}

export default boardReceiveAttack;
