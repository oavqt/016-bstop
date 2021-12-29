import playerObjectBuild from '../../player/playerObjectBuild';

const testPlayerObjectProtoPropertiesFunction = () => 'dark souls';

const testPlayerObjectProtoProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testPlayerObjectProtoPropertiesFunction
};

test('return default(player object) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(
      playerObjectBuild(null, null, testPlayerObjectProtoProperties)
    )
  ).toStrictEqual(testPlayerObjectProtoProperties);
});
