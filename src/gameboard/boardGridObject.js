import rowBuild from './boardRow';

const gridObject = (gridProperties, cellProperties) => {
  const object = {
    board: [],
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
          alive: 0,
          destroyed: 0
        }
      },
      custom: {
        ...gridProperties
      }
    }
  };

  for (let i = 0; i < 10; i += 1) {
    object.board.push(rowBuild(cellProperties));
  }

  return object;
};

export default gridObject;
