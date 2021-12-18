import row from '../../gameboard/boardRow';

const testPropertyName = 'a';

const testRow = {
  [testPropertyName]: {},
  state: {
    active: true,
    empty: true
  },
  custom: {}
};

const testCell = {
  coords: { cell: null, display: null },
  state: {
    active: true,
    empty: true,
    selected: false,
    status: { hit: false, missed: false }
  },
  vessel: null,
  custom: {}
};

const testPropertyFunction = () => 'Dark Souls';

const testProperties = {
  anime: 'One Piece',
  movie: 'Harry Potter',
  testPropertyFunction
};

test('return object containing parameter as a property', () => {
  expect(row(testPropertyName)).toMatchObject(testRow);
});

test('return object containing parameter as a property with custom properties passed in as an object', () => {
  expect(row(testPropertyName, testProperties).custom).toMatchObject(
    testProperties
  );
});

test('return object containing parameter as a property with a lenght of 10', () => {
  expect(Object.keys(row(testPropertyName)[testPropertyName])).toHaveLength(10);
});

test('return object containing parameter as a property with an object containing 0-9 objects', () => {
  const testKeysArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  expect(Object.keys(row(testPropertyName)[testPropertyName])).toStrictEqual(
    testKeysArray
  );
});

test('return object containing parameter as a property with an object containing cell objects', () => {
  for (let i = 0; i <= 9; i += 1) {
    expect(row(testPropertyName)[testPropertyName][i]).toMatchObject(testCell);
  }
});
