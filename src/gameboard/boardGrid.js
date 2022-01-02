import boardRowBuild from './boardRow';

const boardGridBuild = (
  columnLength,
  rowLength,
  boardCellObjectProperties,
  boardCellObjectProtoProperties
) => {
  const board = [];

  const int = Number(columnLength);

  if (typeof columnLength === 'object' || Number.isNaN(int))
    throw new Error('Value is not a number');
  else
    for (let i = 0; i < int; i += 1) {
      board.push(
        boardRowBuild(
          rowLength,
          boardCellObjectProperties,
          boardCellObjectProtoProperties
        )
      );
    }

  return board;
};

export default boardGridBuild;
