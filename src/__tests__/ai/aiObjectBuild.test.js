import aiObjectBuild from '../../ai/aiObjectBuild';

const testAIObjectProtoPropertiesFunction = () => 'dark souls';

const testAIObjectProtoProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testAIObjectProtoPropertiesFunction
};

test('return default(ai object) with a custom prototype', () => {
  expect(
    Object.getPrototypeOf(
      aiObjectBuild(null, null, testAIObjectProtoProperties)
    )
  ).toStrictEqual(testAIObjectProtoProperties);
});
