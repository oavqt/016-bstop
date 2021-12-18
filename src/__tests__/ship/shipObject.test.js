import ship from '../../ship/shipObject';

const testShip = [
  [
    'carrier',
    {
      type: 'Carrier',
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'battleship',
    {
      type: 'Battleship',
      ship: ['[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'destroyer',
    {
      type: 'Destroyer',
      ship: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'submarine',
    {
      type: 'Submarine',
      ship: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'patrol',
    {
      type: 'Patrol Boat',
      ship: ['[][]', '[][]'],
      custom: {}
    }
  ]
];
const testPropertyFunction = () => 'Dark Souls';

const testProperties = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testPropertyFunction
};

test.each(testShip)('return a ship object', (method, result) => {
  expect(ship[method]()).toStrictEqual(result);
});

test.each(testShip)(
  'return a ship object with custom properties passed in as an object',
  (method) => {
    expect(ship[method](testProperties).custom).toMatchObject(testProperties);
  }
);
