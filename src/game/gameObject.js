const gameObject = {
  type: {
    computer: (playerObject, aiObject, gameObjectTypeComputerProperties) => {
      return {
        playerObject,
        aiObject,
        isTurn: null,
        isWinner: null,
        custom: {
          ...gameObjectTypeComputerProperties
        }
      };
    }
  }
};

export default gameObject;
