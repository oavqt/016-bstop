const boardCellObject = (boardCellObjectProperties) => {
  return {
    coords: { cell: null, display: null },
    selected: false,
    status: { isHit: false, isMissed: false },
    ship: null,
    custom: { ...boardCellObjectProperties }
  };
};

export default boardCellObject;
