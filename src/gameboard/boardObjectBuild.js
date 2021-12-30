import pubsub from '../tools/pubsub';
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

  const boardObjectMerged = Object.assign(Object.create(protoProperties), base);

  pubsub.publish('boardCoordinates', boardObjectMerged);

  return boardObjectMerged;
};

export default boardObjectBuild;
