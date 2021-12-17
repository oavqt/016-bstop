const ship = {
  carrier: () => {
    return {
      type: 'Carrier',
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]']
    };
  },
  battleship: () => {
    return {
      type: 'Battleship',
      ship: ['[][]', '[][]', '[][]', '[][]']
    };
  },
  destroyer: () => {
    return {
      type: 'Destroyer',
      ship: ['[][]', '[][]', '[][]']
    };
  },
  submarine: () => {
    return {
      type: 'Submarine',
      ship: ['[][]', '[][]', '[][]']
    };
  },
  patrol: () => {
    return {
      type: 'Patrol Boat',
      ship: ['[][]', '[][]']
    };
  }
};

export default ship;
