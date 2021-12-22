import boardCellObjectBuild from './boardCellObjectBuild';

const boardRowBuild = (
  rowLength,
  boardCellObjectProperties,
  boardCellObjectProtoProperties
) => {
  const row = [];

  const int = Number(rowLength);

  if (typeof rowLength === 'object' || Number.isNaN(int))
    throw new Error('Value is not a number');
  else
    for (let i = 0; i < int; i += 1) {
      row.push(
        boardCellObjectBuild(
          boardCellObjectProperties,
          boardCellObjectProtoProperties
        )
      );
    }

  return row;
};

export default boardRowBuild;
