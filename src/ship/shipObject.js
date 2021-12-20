const shipObject = {
  carrier: (shipProperties) => {
    return {
      id: null,
      type: 'Carrier',
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  battleship: (shipProperties) => {
    return {
      id: null,
      type: 'Battleship',
      ship: ['[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  destroyer: (shipProperties) => {
    return {
      id: null,
      type: 'Destroyer',
      ship: ['[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  submarine: (shipProperties) => {
    return {
      id: null,
      type: 'Submarine',
      ship: ['[][]', '[][]', '[][]'],
      custom: { ...shipProperties }
    };
  },
  patrol: (shipProperties) => {
    return {
      id: null,
      type: 'Patrol Boat',
      ship: ['[][]', '[][]'],
      custom: { ...shipProperties }
    };
  }
};

export default shipObject;
