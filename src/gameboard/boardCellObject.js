const cellObject = (cellProperties = '') => {
  return {
    coords: { cell: null, display: null },
    selected: false,
    status: { hit: false, missed: false },
    vessel: null,
    custom: { ...cellProperties }
  };
};

export default cellObject;
