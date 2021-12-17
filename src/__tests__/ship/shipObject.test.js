import ship from '../../ship/shipObject';

const cases = [
  [
    'carrier',
    {
      type: 'Carrier',
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]']
    }
  ],
  [
    'battleship',
    {
      type: 'Battleship',
      ship: ['[][]', '[][]', '[][]', '[][]']
    }
  ],
  [
    'destroyer',
    {
      type: 'Destroyer',
      ship: ['[][]', '[][]', '[][]']
    }
  ],
  [
    'submarine',
    {
      type: 'Submarine',
      ship: ['[][]', '[][]', '[][]']
    }
  ],
  [
    'patrol',
    {
      type: 'Patrol Boat',
      ship: ['[][]', '[][]']
    }
  ]
];

test.each(cases)(
  'return an object consisting of a ship type and a ship',
  (method, result) => {
    expect(ship[method]()).toStrictEqual(result);
  }
);
