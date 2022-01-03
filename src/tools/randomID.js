import pubsub from './pubsub';

const randomID = {
  create: (length) => {
    let id = '';

    for (let i = 0; i < length; i += 1) {
      const asciiDecimal = Math.floor(Math.random() * (126 - 33 + 1) + 33);
      id += String.fromCharCode(asciiDecimal);
    }

    return id;
  },
  board: (boardObject) => {
    const boardObjectProperties = boardObject.properties;
    const id = randomID.create(12);

    boardObjectProperties.id = id;

    return id;
  },
  ship: (shipObject) => {
    const shipObjectNoParamReassign = shipObject;
    const id = randomID.create(12);

    shipObjectNoParamReassign.id = id;

    return id;
  }
};

pubsub.subscribe('boardObjectID', randomID.board);
pubsub.subscribe('shipObjectID', randomID.ship);

export default randomID;
