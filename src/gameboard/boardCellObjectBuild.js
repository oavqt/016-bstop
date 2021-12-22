import boardCellObject from './boardCellObject';

const boardCellObjectBuild = (
  boardCellObjectProperties,
  boardCellObjectProtoProperties
) => {
  const base = boardCellObject(boardCellObjectProperties);
  const customProtoProperties = { ...boardCellObjectProtoProperties };

  return Object.assign(Object.create(customProtoProperties), base);
};

export default boardCellObjectBuild;
