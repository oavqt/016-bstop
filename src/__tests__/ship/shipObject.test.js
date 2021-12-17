import ship from '../../ship/shipObject';

const cases = [
  [
    'carrier',
    {
      type: 'Carrier',
      options: {},
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]']
    }
  ],
  [
    'battleship',
    {
      type: 'Battleship',
      options: {},
      ship: ['[][]', '[][]', '[][]', '[][]']
    }
  ],
  [
    'destroyer',
    {
      type: 'Destroyer',
      options: {},
      ship: ['[][]', '[][]', '[][]']
    }
  ],
  [
    'submarine',
    {
      type: 'Submarine',
      options: {},
      ship: ['[][]', '[][]', '[][]']
    }
  ],
  [
    'patrol',
    {
      type: 'Patrol Boat',
      options: {},
      ship: ['[][]', '[][]']
    }
  ]
];
const testPropertyFunction = () => 'Dark Souls';

const testOptions = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testPropertyFunction
};

test.each(cases)('return a ship object', (method, result) => {
  expect(ship[method]()).toStrictEqual(result);
});

test.each(cases)(
  'return a ship object with custom properties passed in as an object',
  (method) => {
    expect(ship[method](testOptions).options).toMatchObject(testOptions);
  }
);
