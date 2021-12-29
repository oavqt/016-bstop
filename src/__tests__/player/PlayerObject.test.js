import playerObject from '../../player/playerObject';

const testPlayerObject = {
  boardObject: 'kotor',
  isTurn: false,
  isWinner: false,
  custom: {}
};

const testPlayerObjectPropertiesCustomFunction = () => 'dark souls';

const testPlayerObjectPropertiesCustom = {
  anime: 'one piece',
  movie: 'harry potter',
  testPlayerObjectPropertiesCustomFunction
};

test('return a player object', () => {
  expect(playerObject('kotor')).toStrictEqual(testPlayerObject);
});

test('return a player object with custom properties', () => {
  expect(
    playerObject('kotor', testPlayerObjectPropertiesCustom).custom
  ).toMatchObject(testPlayerObjectPropertiesCustom);
});
