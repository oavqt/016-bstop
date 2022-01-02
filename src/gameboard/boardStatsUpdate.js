import pubsub from '../tools/pubsub';

const boardStatsUpdate = {
  attempts: (boardObjectValue) => {
    const [boardObject, value] = boardObjectValue;
    const boardObjectPropertiesStatsAttempts =
      boardObject.properties.stats.attempts;

    boardObjectPropertiesStatsAttempts.total += 1;

    if (value > 0) boardObjectPropertiesStatsAttempts.hits += 1;
    else boardObjectPropertiesStatsAttempts.misses += 1;
  },
  ships: (boardObjectValue) => {
    const [boardObject, value] = boardObjectValue;
    const boardObjectPropertiesStatsShips = boardObject.properties.stats.ships;

    if (value > 0) {
      boardObjectPropertiesStatsShips.total += 1;
      boardObjectPropertiesStatsShips.standing += 1;
    } else {
      boardObjectPropertiesStatsShips.shipwrecked += 1;
      boardObjectPropertiesStatsShips.standing -= 1;
    }
  }
};

pubsub.subscribe('boardStatsUpdateAttempts', boardStatsUpdate.attempts);
pubsub.subscribe('boardStatsUpdateShips', boardStatsUpdate.ships);

export default boardStatsUpdate;
