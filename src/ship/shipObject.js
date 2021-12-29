const shipObject = {
  carrier: (shipObjectProperties) => {
    return {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Carrier',
      layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  battleship: (shipObjectProperties) => {
    return {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Battleship',
      layout: ['[][]', '[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  destroyer: (shipObjectProperties) => {
    return {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Destroyer',
      layout: ['[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  submarine: (shipObjectProperties) => {
    return {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Submarine',
      layout: ['[][]', '[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  },
  patrol: (shipObjectProperties) => {
    return {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Patrol Boat',
      layout: ['[][]', '[][]'],
      custom: { ...shipObjectProperties }
    };
  }
};

export default shipObject;
