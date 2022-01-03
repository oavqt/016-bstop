import boardGridBuild from './boardGrid';

const boardObject = (
  columnLength,
  rowLength,
  boardObjectProperties,
  boardCellObjectProperties,
  boardCellObjectProtoProperties
) => {
  const object = {
    board: boardGridBuild(
      columnLength,
      rowLength,
      boardCellObjectProperties,
      boardCellObjectProtoProperties
    ),
    properties: {
      id: null,
      status: {
        isTurn: false,
        isWinner: false
      },
      size: {
        columnLength,
        rowLength
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
