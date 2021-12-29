import shipObject from '../../ship/shipObject';

const testShipObject = [
  [
    'carrier',
    {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Carrier',
      layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'battleship',
    {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Battleship',
      layout: ['[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'destroyer',
    {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Destroyer',
      layout: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'submarine',
    {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Submarine',
      layout: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'patrol',
    {
      id: null,
      isHit: false,
      isSunk: false,
      type: 'Patrol Boat',
      layout: ['[][]', '[][]'],
      custom: {}
    }
  ]
];
const testShipPropertiesFunctionCustom = () => 'dark souls';

const testShipPropertiesCustom = {
  anime: 'one piece',
  movie: 'harry potter',
  testShipPropertiesFunctionCustom
};

test.each(testShipObject)('return a ship object', (method, result) => {
  expect(shipObject[method]()).toStrictEqual(result);
});

test.each(testShipObject)(
  'return a ship object with custom properties passed in as an object',
  (method) => {
    expect(shipObject[method](testShipPropertiesCustom).custom).toMatchObject(
      testShipPropertiesCustom
    );
  }
);
