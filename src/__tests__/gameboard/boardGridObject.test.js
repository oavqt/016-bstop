import boardGridObject from '../../gameboard/boardGridObject';

const testGridObject = {
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
      alive: 0,
      destroyed: 0
    }
  },
  custom: {}
};

const testGridPropertyFunction = () => 'dark souls';

const testGridProperties = {
  anime: 'one piece',
  movie: 'harry potter',
  testGridPropertyFunction
};

test('return object with property (properties) that contains (status, stats, ships, and custom) properties', () => {
  expect(boardGridObject().properties).toStrictEqual(testGridObject);
});

test('return object containing the custom properties passed in as an object', () => {
  expect(boardGridObject(testGridProperties).properties.custom).toMatchObject(
    testGridProperties
  );
});

test('return board property', () => {
  expect(Object.keys(boardGridObject())).toContain('board');
});

test('return board array with a lenght of 10', () => {
  expect(boardGridObject().board).toHaveLength(10);
});
