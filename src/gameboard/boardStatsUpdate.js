import pubsub from '../tools/pubsub';

const boardStatsUpdate = {
  attempts: (boardObject, value) => {
    const boardObjectProperties = boardObject.properties;
    const propertiesStats = boardObjectProperties.stats;
    const statsAttempts = propertiesStats.attempts;

    statsAttempts.total += 1;

    if (value > 0) statsAttempts.hits += 1;
    else statsAttempts.misses += 1;
  },
  ships: (boardObject, value) => {
    const boardObjectProperties = boardObject.properties;
    const propertiesStats = boardObjectProperties.stats;
    const statsShips = propertiesStats.ships;

    if (value > 0) {
      statsShips.total += 1;
      statsShips.standing += 1;
    } else {
      statsShips.shipwrecked += 1;
      statsShips.standing -= 1;
    }
  }
};

pubsub.subscribe('boardStatsUpdateAttempts', boardStatsUpdate.attempts);
pubsub.subscribe('boardStatsUpdateShips', boardStatsUpdate.ships);

export default boardStatsUpdate;
