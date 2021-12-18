import shipObject from '../../ship/shipObject';

const testShipObject = [
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
const testShipPropertyFunction = () => 'Dark Souls';

const testShipProperties = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testShipPropertyFunction
};

test.each(testShipObject)('return a ship object', (method, result) => {
  expect(shipObject[method]()).toStrictEqual(result);
});

test.each(testShipObject)(
  'return a ship object with custom properties passed in as an object',
  (method) => {
    expect(shipObject[method](testShipProperties).custom).toMatchObject(
      testShipProperties
    );
  }
);
