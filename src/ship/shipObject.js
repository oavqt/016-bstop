const shipObject = {
  carrier: (shipObjectProperties) => {
    return {
      id: null,
      type: 'Carrier',
      layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  battleship: (shipObjectProperties) => {
    return {
      id: null,
      type: 'Battleship',
      layout: ['[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  destroyer: (shipObjectProperties) => {
    return {
      id: null,
      type: 'Destroyer',
      layout: ['[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  submarine: (shipObjectProperties) => {
    return {
      id: null,
      type: 'Submarine',
      layout: ['[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  patrol: (shipObjectProperties) => {
    return {
      id: null,
      type: 'Patrol Boat',
      layout: ['[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  }
};

export default shipObject;
