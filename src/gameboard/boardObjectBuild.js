import boardObject from './boardObject';

import pubsub from '../tools/pubsub';
import './boardCoordinates';
import '../tools/randomID';

const boardObjectBuild = (
  columnLength = 10,
  rowLength = 10,
  boardObjectProperties = {},
  boardObjectProtoProperties = {},
  boardCellObjectProperties = {},
  boardCellObjectProtoProperties = {}
) => {
  const base = boardObject(
    columnLength,
    rowLength,
    boardObjectProperties,
    boardCellObjectProperties,
    boardCellObjectProtoProperties
  );
  const protoProperties = { ...boardObjectProtoProperties };

  const boardObjectMerged = Object.assign(Object.create(protoProperties), base);

  pubsub.publish('boardCoordinates', boardObjectMerged);
  pubsub.publish('boardObjectID', boardObjectMerged);

  return boardObjectMerged;
};

export default boardObjectBuild;
