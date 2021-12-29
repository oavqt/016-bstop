const playerObject = (boardObject, playerObjectProperties) => {
  return {
    boardObject,
    isTurn: false,
    isWinner: false,
    custom: {
      ...playerObjectProperties
    }
  };
};

export default playerObject;
