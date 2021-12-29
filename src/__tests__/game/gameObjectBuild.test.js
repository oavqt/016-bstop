import gameObjectBuild from '../../game/gameObjectBuild';

describe('gameObject.type.computer', () => {
  const testGameObjectTypeComputerProtoPropertiesFunction = () => 'dark souls';

  const testGameObjectTypeComputerProtoProperties = {
    anime: 'one piece',
    movie: 'harry potter',
    testGameObjectTypeComputerProtoPropertiesFunction
  };

  test('return default(ai object) with a custom prototype', () => {
    expect(
      Object.getPrototypeOf(
        gameObjectBuild.type.computer(
          null,
          null,
          null,
          testGameObjectTypeComputerProtoProperties
        )
      )
    ).toStrictEqual(testGameObjectTypeComputerProtoProperties);
  });
});
