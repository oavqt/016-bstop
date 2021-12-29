const aiObject = (boardObject, aiObjectProperties) => {
  return {
    boardObject,
    isTurn: false,
    isWinner: false,
    custom: {
      ...aiObjectProperties
    }
  };
};

export default aiObject;
