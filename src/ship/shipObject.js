const ship = {
  carrier: (shipProperties) => {
    return {
      type: 'Carrier',
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  battleship: (shipProperties) => {
    return {
      type: 'Battleship',
      ship: ['[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  destroyer: (shipProperties) => {
    return {
      type: 'Destroyer',
      ship: ['[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  submarine: (shipProperties) => {
    return {
      type: 'Submarine',
      ship: ['[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  patrol: (shipProperties) => {
    return {
      type: 'Patrol Boat',
      ship: ['[][]', '[][]'],
      custom: { ...shipProperties }
    };
  }
};

export default ship;
