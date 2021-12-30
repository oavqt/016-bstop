import playerObject from './playerObject';

const playerObjectBuild = (
  boardObject,
  playerObjectProperties = {},
  playerObjectProtoProperties = {}
) => {
  const base = playerObject(boardObject, playerObjectProperties);
  const protoProperties = { ...playerObjectProtoProperties };

  return Object.assign(Object.create(protoProperties), base);
};

export default playerObjectBuild;
