import gameObject from '../../game/gameObject';

describe('gameObject.type.computer', () => {
  const testGameObjectTypeComputer = {
    playerObject: 'kotor',
    aiObject: 'kotor',
    isTurn: null,
    isWinner: null,
    custom: {}
  };

  const testGameObjectTypeComputerPropertiesCustomFunction = () => 'dark souls';

  const testGameObjectTypeComputerPropertiesCustom = {
    anime: 'one piece',
    movie: 'harry potter',
    testGameObjectTypeComputerPropertiesCustomFunction
  };

  test('return a gameObject.type.computer object', () => {
    expect(gameObject.type.computer('kotor', 'kotor')).toStrictEqual(
      testGameObjectTypeComputer
    );
  });

  test('return a gameObject.type.computer object with custom properties', () => {
    expect(
      gameObject.type.computer(
        'kotor',
        'kotor',
        testGameObjectTypeComputerPropertiesCustom
      ).custom
    ).toMatchObject(testGameObjectTypeComputerPropertiesCustom);
  });
});
