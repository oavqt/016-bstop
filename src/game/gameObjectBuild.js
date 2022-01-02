import gameObject from './gameObject';

const gameObjectBuild = (
  firstPlayerObject,
  secondPlayerObject,
  gameObjectProperties = {},
  gameObjectProtoProperties = {}
) => {
  const base = gameObject(
    firstPlayerObject,
    secondPlayerObject,
    gameObjectProperties
  );
  const protoProperties = { ...gameObjectProtoProperties };

  const gameObjectMerged = Object.assign(Object.create(protoProperties), base);

  return gameObjectMerged;
};

export default gameObjectBuild;
