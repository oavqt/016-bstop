import grid from '../../gameboard/boardGrid';

const testGrid = {
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

const testPropertyFunction = () => 'Dark Souls';

const testProperties = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testPropertyFunction
};

test('return object with property (properties) that contains (status, stats, ships, and custom) properties', () => {
  expect(grid().properties).toStrictEqual(testGrid);
});

test('return object containing the custom properties passed in as an object', () => {
  expect(grid(testProperties).properties.custom).toMatchObject(testProperties);
});

test('return board property', () => {
  expect(Object.keys(grid())).toContain('board');
});

test('return board array with a lenght of 10', () => {
  expect(grid().board).toHaveLength(10);
});

test('return board array with 10 objects with properties a-k', () => {
  const testKeysArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  expect(
    grid().board.map((object) => {
      const [property] = Object.keys(object);

      return property;
    })
  ).toStrictEqual(testKeysArray);
});
