import randomCoords from '../tools/randomCoords';

const aiBasicSelectCoordinate = (boardObject) => {
  const coordsYMax = boardObject.board.length;
  const coordsXMax = boardObject.board[0].length;

  let done = false;
  let coordsCached;

  while (!done) {
    const [coordsY, coordsX] = randomCoords([0, coordsYMax], [0, coordsXMax]);
    const boardCellObject = boardObject.board[coordsY][coordsX];

    if (boardCellObject.selected !== true) {
      boardCellObject.selected = true;
      coordsCached = [coordsY, coordsX];
      done = true;
    } else {
      done = boardObject.board.every((indexOfY) =>
        indexOfY.every((indexOfX) => indexOfX.selected === true)
      );
    }
  }

  return coordsCached;
};

export default aiBasicSelectCoordinate;
