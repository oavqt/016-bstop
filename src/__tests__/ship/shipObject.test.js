import shipObject from '../../ship/shipObject';

const testShipObject = [
  [
    'carrier',
    {
      id: null,
      type: 'Carrier',
      ship: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'battleship',
    {
      id: null,
      type: 'Battleship',
      ship: ['[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'destroyer',
    {
      id: null,
      type: 'Destroyer',
      ship: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'submarine',
    {
      id: null,
      type: 'Submarine',
      ship: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'patrol',
    {
      id: null,
      type: 'Patrol Boat',
      ship: ['[][]', '[][]'],
      custom: {}
    }
  ]
];
const testShipPropertyFunction = () => 'dark souls';

const testShipProperties = {
  anime: 'one piece',
  movie: 'harry potter',
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
