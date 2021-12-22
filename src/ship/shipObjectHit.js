import pubsub from '../tools/pubsub';

function shipObjectHit(boardObject, coords) {
  const [coordsY, coordsX] = coords;

  const boardCellObject = boardObject.board[coordsY][coordsX];
  const shipObject = boardCellObject.ship;
  const shipObjectLayout = shipObject.layout;

  const index = shipObjectLayout.findIndex(
    (value) => value === `[${coordsY}][${coordsX}]`
  );

  shipObjectLayout[index] = '[-][-]';
}

pubsub.subscribe('shipHit', shipObjectHit);

export default shipObjectHit;
