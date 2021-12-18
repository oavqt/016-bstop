import row from './boardRow';

const grid = (gridProperties, cellProperties) => {
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

  for (let i = 0; i < 10; i += 1) {
    object.board.push(row(cellProperties));
  }

  return object;
};

export default grid;
