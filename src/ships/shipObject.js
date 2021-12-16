const shipObject = {
  carrier: () => {
    return {
      type: 'Carrier',
      ship: ['ln', 'ln', 'ln', 'ln', 'ln']
    };
  },
  battleship: () => {
    return {
      type: 'Battleship',
      ship: ['ln', 'ln', 'ln', 'ln']
    };
  },
  destroyer: () => {
    return {
      type: 'Destroyer',
      ship: ['ln', 'ln', 'ln']
    };
  },
  submarine: () => {
    return {
      type: 'Submarine',
      ship: ['ln', 'ln', 'ln']
    };
  },
  patrol: () => {
    return {
      type: 'Patrol Boat',
      ship: ['ln', 'ln']
    };
  }
};

export default shipObject;
