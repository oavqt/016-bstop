const shipCoordinates = (cellObjects) => {
  cellObjects.forEach((cellObject) => {
    const cellObjectShip = cellObject.vessel.ship;

    const emptyCoords = cellObjectShip.indexOf(
      cellObjectShip.find((shipCoords) => shipCoords === '[][]')
    );

    cellObjectShip[emptyCoords] = cellObject.coords.cell;
  });
};

export default shipCoordinates;
