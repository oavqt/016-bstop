import boardGridObject from '../../gameboard/boardGridObject';

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

const testBoardObjectPropertiesCustomFunction = () => 'dark souls';

const testBoardObjectPropertiesCustom = {
  anime: 'one piece',
  movie: 'harry potter',
  testBoardObjectPropertiesCustomFunction
};

test('return object with property (properties) that contains (status, stats, ships, and custom) properties', () => {
  expect(boardGridObject().properties).toStrictEqual(
    testBoardObject.properties
  );
});

test('return object containing the custom properties passed in as an object', () => {
  expect(
    boardGridObject(testBoardObjectPropertiesCustom).properties.custom
  ).toMatchObject(testBoardObjectPropertiesCustom);
});

test('return board property', () => {
  expect(Object.keys(boardGridObject())).toContain('board');
});

test('return board array with a lenght of 10', () => {
  expect(boardGridObject().board).toHaveLength(10);
});
