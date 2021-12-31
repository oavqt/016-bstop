import boardGridBuild from './boardGrid';

const boardObject = (
  gridLength,
  rowLength,
  boardObjectProperties,
  boardCellObjectProperties,
  boardCellObjectProtoProperties
) => {
  const object = {
    board: boardGridBuild(
      gridLength,
      rowLength,
      boardCellObjectProperties,
      boardCellObjectProtoProperties
    ),
    properties: {
      status: {
        isTurn: false,
        isWinner: false
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
      custom: {
        ...boardObjectProperties
      }
    }
  };

  return object;
};

export default boardObject;
