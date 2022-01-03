import pubsub from '../tools/pubsub';

const shipObjectCoordinates = ([boardObject, shipCoordinates]) => {
  shipCoordinates.forEach(([iY, iX]) => {
    const coords = boardObject.board[iY][iX].coords.cell;
    const shipLayout = boardObject.board[iY][iX].ship.layout;
    const empty = shipLayout.indexOf(shipLayout.find((emp) => emp === '[][]'));

    shipLayout[empty] = coords;
  });
};

pubsub.subscribe('shipObjectCoordinates', shipObjectCoordinates);

export default shipObjectCoordinates;
