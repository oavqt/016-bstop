const ship = {
  carrier: (options) => {
    return {
      type: 'Carrier',
      options: { ...options },
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]']
    };
  },
  battleship: (options) => {
    return {
      type: 'Battleship',
      options: { ...options },
      ship: ['[][]', '[][]', '[][]', '[][]']
    };
  },
  destroyer: (options) => {
    return {
      type: 'Destroyer',
      options: { ...options },
      ship: ['[][]', '[][]', '[][]']
    };
  },
  submarine: (options) => {
    return {
      type: 'Submarine',
      options: { ...options },
      ship: ['[][]', '[][]', '[][]']
    };
  },
  patrol: (options) => {
    return {
      type: 'Patrol Boat',
      options: { ...options },
      ship: ['[][]', '[][]']
    };
  }
};

export default ship;
