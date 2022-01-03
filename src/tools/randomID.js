import pubsub from './pubsub';

const randomID = {
  create: (length) => {
    let idLetterNumber = '';

    for (let i = 0; i < length; i += 1) {
      const randomNumber = Math.floor(Math.random() * (9 - 0 + 1) + 0);
      const randomASCIILetter = String.fromCharCode(
        Math.floor(Math.random() * (122 - 97 + 1) + 97)
      );

      const upperLower = Math.floor(Math.random() * (1 - 0 + 1) + 0);
      idLetterNumber += `${
        upperLower === 1
          ? randomASCIILetter.toUpperCase()
          : randomASCIILetter.toLowerCase()
      }${randomNumber}`;
    }

    return idLetterNumber;
  },
  board: (boardObject) => {
    const boardObjectProperties = boardObject.properties;
    const idLetterNumber = randomID.create(6);

    boardObjectProperties.id = idLetterNumber;

    return idLetterNumber;
  },
  ship: (shipObject) => {
    const shipObjectNoParamReassign = shipObject;
    const ididLetterNumber = randomID.create(6);

    shipObjectNoParamReassign.id = ididLetterNumber;

    return ididLetterNumber;
  }
};

pubsub.subscribe('boardObjectID', randomID.board);
pubsub.subscribe('shipObjectID', randomID.ship);

export default randomID;
