import pubsub from '../tools/pubsub';

const shipObjectCoordinates = (boardCellObjectArray) => {
  boardCellObjectArray.forEach((boardCellObject) => {
    const coords = boardCellObject.coords.cell;
    const shipLayout = boardCellObject.ship.layout;
    const empty = shipLayout.indexOf(shipLayout.find((emp) => emp === '[][]'));

    shipLayout[empty] = coords;
  });
};

pubsub.subscribe('shipObjectCoordinates', shipObjectCoordinates);

export default shipObjectCoordinates;
