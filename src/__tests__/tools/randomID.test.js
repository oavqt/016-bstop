import randomID from '../../tools/randomID';

describe('randomID.create', () => {
  test('return a string(lenght) contaning random letter characters using 97-122 ascii decimals and random numbers 0-9', () => {
    expect(randomID.create(6)).toHaveLength(12);
  });

  const testIDs = [
    randomID.create(6),
    randomID.create(6),
    randomID.create(6),
    randomID.create(6)
  ];

  test('returned strings should not be the same', () => {
    expect(((testIDs[0] !== testIDs[1]) !== testIDs[2]) !== testIDs[3]).toBe(
      true
    );
  });
});

describe('test randomID.board && randomID.ship', () => {
  const testBoardObject = {
    properties: {
      id: null
    }
  };

  const testShipObject = {
    id: null
  };

  test('modify id property of the board and ship objects', () => {
    expect(randomID.board(testBoardObject)).toStrictEqual(
      testBoardObject.properties.id
    );
    expect(randomID.ship(testShipObject)).toStrictEqual(testShipObject.id);
  });
});
