import gameObject from '../../game/gameObject';

const testGameObject = {
  firstPlayerObject: 'kotor',
  secondPlayerObject: 'kotor',
  status: {
    isTurn: null,
    isWinner: null
  },
  custom: {}
};

const testGameObjectPropertiesCustomFunction = () => 'dark souls';

const testGameObjectPropertiesCustom = {
  anime: 'one piece',
  movie: 'harry potter',
  testGameObjectPropertiesCustomFunction
};

test('return a game object', () => {
  expect(gameObject('kotor', 'kotor')).toStrictEqual(testGameObject);
});

test('return a game object with custom properties', () => {
  expect(
    gameObject('kotor', 'kotor', testGameObjectPropertiesCustom).custom
  ).toMatchObject(testGameObjectPropertiesCustom);
});
