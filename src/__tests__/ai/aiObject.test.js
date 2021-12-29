import aiObject from '../../ai/aiObject';

const testAIObject = {
  boardObject: 'kotor',
  isTurn: false,
  isWinner: false,
  custom: {}
};

const testAIObjectPropertiesCustomFunction = () => 'dark souls';

const testAIObjectPropertiesCustom = {
  anime: 'one piece',
  movie: 'harry potter',
  testAIObjectPropertiesCustomFunction
};

test('return a ai object', () => {
  expect(aiObject('kotor')).toStrictEqual(testAIObject);
});

test('return a ai object with custom properties', () => {
  expect(aiObject('kotor', testAIObjectPropertiesCustom).custom).toMatchObject(
    testAIObjectPropertiesCustom
  );
});
