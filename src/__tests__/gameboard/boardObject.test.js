import boardObject from '../../gameboard/boardObject';

const testBoardObject = {
  properties: {
    id: null,
    status: {
      isTurn: false,
      isWinner: false
    },
    size: {
      columnLength: 10,
      rowLength: 10
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

test('return object with property (properties) that contains (status, size, stats, ships, and custom) properties', () => {
  expect(boardObject(10, 10, null, null, null).properties).toStrictEqual(
    testBoardObject.properties
  );
});

test('return object containing the custom properties passed in as an object', () => {
  expect(
    boardObject(10, 10, testBoardObjectPropertiesCustom, null, null).properties
      .custom
  ).toMatchObject(testBoardObjectPropertiesCustom);
});

test('return board property', () => {
  expect(Object.keys(boardObject(10, 10, null, null, null))).toContain('board');
});

test('return board array with a default lenght of 10', () => {
  expect(boardObject(10, 10, null, null, null).board).toHaveLength(10);
});
