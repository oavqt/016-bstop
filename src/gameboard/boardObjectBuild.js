import boardObject from './boardObject';

const boardObjectBuild = (
  gridLength = 10,
  rowLength = 10,
  boardObjectProperties = {},
  boardObjectProtoProperties = {},
  boardCellObjectProperties = {},
  boardCellObjectProtoProperties = {}
) => {
  const base = boardObject(
    gridLength,
    rowLength,
    boardObjectProperties,
    boardCellObjectProperties,
    boardCellObjectProtoProperties
  );

  const protoProperties = { ...boardObjectProtoProperties };

  return Object.assign(Object.create(protoProperties), base);
};

export default boardObjectBuild;
