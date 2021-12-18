const cell = (cellProperties = '') => {
  return {
    coords: { cell: null, display: null },
    state: {
      active: true,
      empty: true,
      selected: false,
      status: { hit: false, missed: false }
    },
    vessel: null,
    custom: { ...cellProperties }
  };
};

export default cell;
