import gameObject from './gameObject';

const gameObjectBuild = {
  type: {
    computer: (
      playerObject,
      aiObject,
      gameObjectTypeComputerProperties = {},
      gameObjectTypeComputerProtoProperties = {}
    ) => {
      const base = gameObject.type.computer(
        playerObject,
        aiObject,
        gameObjectTypeComputerProperties
      );
      const protoProperties = { ...gameObjectTypeComputerProtoProperties };

      const gameObjectMerged = Object.assign(
        Object.create(protoProperties),
        base
      );

      return gameObjectMerged;
    }
  }
};

export default gameObjectBuild;
