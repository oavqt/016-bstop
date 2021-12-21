import boardCellObject from './boardCellObject';

const boardCellObjectBuild = (
  boardCellObjectProperties = '',
  boardCellProtoProperties = ''
) => {
  const base = boardCellObject(boardCellObjectProperties);
  const customProtoProperties = { ...boardCellProtoProperties };

  return Object.assign(Object.create(customProtoProperties), base);
};

export default boardCellObjectBuild;
