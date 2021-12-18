import row from './boardRow';

const grid = (gridProperties, rowProperties, cellProperties) => {
  const identifier = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const object = {
    board: [],
    properties: {
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
      custom: {
        ...gridProperties
      }
    }
  };

  identifier.map((letter) =>
    object.board.push(row(letter, rowProperties, cellProperties))
  );

  return object;
};

export default grid;
