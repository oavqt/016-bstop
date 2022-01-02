import boardStatsUpdate from '../../gameboard/boardStatsUpdate';

const testBoardObject = {
  properties: {
    status: {
      active: false,
      completed: false
    },
    stats: {
      attempts: {
        total: 0,
        hits: 0,
        misses: 0
      },
      ships: {
        total: 0,
        shipwrecked: 0,
        standing: 0
      }
    },
    custom: {}
  }
};

const testBoardObjectPropertiesStats = testBoardObject.properties.stats;

describe('boardUpdates.attempts', () => {
  test('expect total, hits, and misses to increment based on input(1 for hit and -1 for miss)', () => {
    boardStatsUpdate.attempts([testBoardObject, 1]);

    expect(testBoardObjectPropertiesStats.attempts.total).toBe(1);
    expect(testBoardObjectPropertiesStats.attempts.hits).toBe(1);
    expect(testBoardObjectPropertiesStats.attempts.misses).toBe(0);

    boardStatsUpdate.attempts([testBoardObject, 1]);
    boardStatsUpdate.attempts([testBoardObject, 1]);

    expect(testBoardObjectPropertiesStats.attempts.total).toBe(3);
    expect(testBoardObjectPropertiesStats.attempts.hits).toBe(3);
    expect(testBoardObjectPropertiesStats.attempts.misses).toBe(0);

    boardStatsUpdate.attempts([testBoardObject, -1]);
    boardStatsUpdate.attempts([testBoardObject, -1]);
    boardStatsUpdate.attempts([testBoardObject, -1]);

    expect(testBoardObjectPropertiesStats.attempts.total).toBe(6);
    expect(testBoardObjectPropertiesStats.attempts.hits).toBe(3);
    expect(testBoardObjectPropertiesStats.attempts.misses).toBe(3);
  });
});

describe('boardUpdates.Ships', () => {
  test('expect total, standing, and shipwrecked to increment based on input(1 for add ship and -1 for shipwrecked)', () => {
    boardStatsUpdate.ships([testBoardObject, 1]);

    expect(testBoardObjectPropertiesStats.ships.total).toBe(1);
    expect(testBoardObjectPropertiesStats.ships.shipwrecked).toBe(0);
    expect(testBoardObjectPropertiesStats.ships.standing).toBe(1);

    boardStatsUpdate.ships([testBoardObject, 1]);
    boardStatsUpdate.ships([testBoardObject, 1]);

    expect(testBoardObjectPropertiesStats.ships.total).toBe(3);
    expect(testBoardObjectPropertiesStats.ships.shipwrecked).toBe(0);
    expect(testBoardObjectPropertiesStats.ships.standing).toBe(3);

    boardStatsUpdate.ships([testBoardObject, -1]);
    boardStatsUpdate.ships([testBoardObject, -1]);
    boardStatsUpdate.ships([testBoardObject, -1]);

    expect(testBoardObjectPropertiesStats.ships.total).toBe(3);
    expect(testBoardObjectPropertiesStats.ships.shipwrecked).toBe(3);
    expect(testBoardObjectPropertiesStats.ships.standing).toBe(0);
  });
});
