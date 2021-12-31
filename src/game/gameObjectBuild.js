import gameObject from './gameObject';

const gameObjectBuild = (
  firstPlayerObject,
  secondPlayerObject,
  gameObjectTypeComputerProperties = {},
  gameObjectTypeComputerProtoProperties = {}
) => {
  const base = gameObject(
    firstPlayerObject,
    secondPlayerObject,
    gameObjectTypeComputerProperties
  );
  const protoProperties = { ...gameObjectTypeComputerProtoProperties };

  const gameObjectMerged = Object.assign(Object.create(protoProperties), base);

  return gameObjectMerged;
};

export default gameObjectBuild;
