import boardCellObjectBuild from './boardCellObjectBuild';

const boardRowBuild = (boardCellObjectProperties = '') => {
  const row = [];

  for (let i = 0; i < 10; i += 1) {
    row.push(boardCellObjectBuild(boardCellObjectProperties));
  }

  return row;
};

export default boardRowBuild;
