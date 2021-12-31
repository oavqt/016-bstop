import gameObjectBuild from '../../game/gameObjectBuild';

const testGameObjectBuildProtoPropertiesFunction = () => 'dark souls';

const testGameObjectBuildProtoProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testGameObjectBuildProtoPropertiesFunction
};

test('return default(game object) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(
      gameObjectBuild(null, null, null, testGameObjectBuildProtoProperties)
    )
  ).toStrictEqual(testGameObjectBuildProtoProperties);
});
