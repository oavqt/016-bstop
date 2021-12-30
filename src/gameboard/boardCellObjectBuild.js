import boardCellObject from './boardCellObject';

const boardCellObjectBuild = (
  boardCellObjectProperties,
  boardCellObjectProtoProperties
) => {
  const base = boardCellObject(boardCellObjectProperties);
  const customProtoProperties = { ...boardCellObjectProtoProperties };

  const boardCellObjectMerged = Object.assign(
    Object.create(customProtoProperties),
    base
  );

  return boardCellObjectMerged;
};

export default boardCellObjectBuild;
