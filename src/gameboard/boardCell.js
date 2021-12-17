const cell = (options = '') => {
  return {
    coords: { cell: null, display: null },
    options: { ...options },
    state: {
      active: true,
      empty: true,
      selected: false,
      status: { hit: false, missed: false }
    },
    vessel: null
  };
};

export default cell;
