import randomCoords from '../tools/randomCoords';
import boardGridPlace from '../gameboard/boardGridPlace';
import shipObjectBuild from '../ship/shipObjectBuild';

import pubsub from '../tools/pubsub';

const aiRandomBoard = (boardObject) => {
  const shipObjectType = [
    'carrier',
    'battleship',
    'destroyer',
    'submarine',
    'patrol'
  ];

  const coordsYMax = boardObject.board.length;
  const coordsXMax = boardObject.board[0].length;
  const direction = ['left', 'up'];

  shipObjectType.forEach((type) => {
    let done = false;

    while (!done) {
      const [coordsY, coordsX] = randomCoords([0, coordsYMax], [0, coordsXMax]);
      const shipObject = shipObjectBuild(type);
      const randomDirection =
        Math.floor(Math.random() * (2 - 0) + 0) === 0
          ? direction[0]
          : direction[1];

      done = boardGridPlace(
        boardObject,
        shipObject,
        [coordsY, coordsX],
        randomDirection
      );
    }
  });

  return true;
};

pubsub.subscribe('aiRandomBoard', aiRandomBoard);

export default aiRandomBoard;
