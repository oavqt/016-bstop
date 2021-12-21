const boardCellObject = (boardCellObjectProperties = '') => {
  return {
    coords: { cell: null, display: null },
    selected: false,
    status: { hit: false, missed: false },
    ship: null,
    custom: { ...boardCellObjectProperties }
  };
};

export default boardCellObject;
