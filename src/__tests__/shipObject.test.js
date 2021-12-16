import shipObject from '../ships/shipObject';

const cases = [
  [
    'carrier',
    {
      type: 'Carrier',
      ship: ['ln', 'ln', 'ln', 'ln', 'ln']
    }
  ],
  [
    'battleship',
    {
      type: 'Battleship',
      ship: ['ln', 'ln', 'ln', 'ln']
    }
  ],
  [
    'destroyer',
    {
      type: 'Destroyer',
      ship: ['ln', 'ln', 'ln']
    }
  ],
  [
    'submarine',
    {
      type: 'Submarine',
      ship: ['ln', 'ln', 'ln']
    }
  ],
  [
    'patrol',
    {
      type: 'Patrol Boat',
      ship: ['ln', 'ln']
    }
  ]
];

test.each(cases)(
  'return an object consisting of a ship type and a ship',
  (method, result) => {
    expect(shipObject[method]()).toStrictEqual(result);
  }
);
