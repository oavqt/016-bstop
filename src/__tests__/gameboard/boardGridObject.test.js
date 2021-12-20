import gridObject from '../../gameboard/boardGridObject';

const testGridObject = {
  status: {
    active: false,
    completed: false,
    empty: true
  },
  stats: {
    attempts: {
      total: null,
      hits: null,
      misses: null
    },
    ships: {
      total: null,
      alive: null,
      destroyed: null
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
  expect(gridObject().properties).toStrictEqual(testGridObject);
});

test('return object containing the custom properties passed in as an object', () => {
  expect(gridObject(testGridProperties).properties.custom).toMatchObject(
    testGridProperties
  );
});

test('return board property', () => {
  expect(Object.keys(gridObject())).toContain('board');
});

test('return board array with a lenght of 10', () => {
  expect(gridObject().board).toHaveLength(10);
});
