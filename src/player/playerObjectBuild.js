import playerObject from './playerObject';

const playerObjectBuild = (
  boardObject,
  playerObjectProperties = {},
  playerObjectProtoProperties = {}
) => {
  const base = playerObject(boardObject, playerObjectProperties);
  const protoProperties = { ...playerObjectProtoProperties };

  const playerObjectMerged = Object.assign(
    Object.create(protoProperties),
    base
  );

  return playerObjectMerged;
};

export default playerObjectBuild;
