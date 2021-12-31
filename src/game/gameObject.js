const gameObject = (
  firstPlayerObject,
  secondPlayerObject,
  gameObjectTypeComputerProperties
) => {
  return {
    firstPlayerObject,
    secondPlayerObject,
    status: {
      isTurn: null,
      isWinner: null
    },
    custom: {
      ...gameObjectTypeComputerProperties
    }
  };
};

export default gameObject;
