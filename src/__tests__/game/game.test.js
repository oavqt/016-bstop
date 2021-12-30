import game from '../../game/game';

describe('game.options.update', () => {
  const testGameOptionsCustom = {
    gameObjectType: 'player',
    gridLength: 12,
    rowLength: 12
  };

  test('return object containing updated options', () => {
    expect(game.options.update(testGameOptionsCustom)).toMatchObject(
      testGameOptionsCustom
    );
  });
});
