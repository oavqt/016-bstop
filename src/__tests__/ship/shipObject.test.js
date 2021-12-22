import shipObject from '../../ship/shipObject';

const testShipObject = [
  [
    'carrier',
    {
      id: null,
      type: 'Carrier',
      layout: ['[][]', '[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'battleship',
    {
      id: null,
      type: 'Battleship',
      layout: ['[][]', '[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'destroyer',
    {
      id: null,
      type: 'Destroyer',
      layout: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'submarine',
    {
      id: null,
      type: 'Submarine',
      layout: ['[][]', '[][]', '[][]'],
      custom: {}
    }
  ],
  [
    'patrol',
    {
      id: null,
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
