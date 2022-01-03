import aiRandomBoard from '../../ai/aiRandomBoard';

const testShipObject = {
  ship: null
};

const testBoardObject = {
  board: [
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ],
    [
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject },
      { ...testShipObject }
    ]
  ]
};

const testShipObjectCountLengthTemplate = {
  Carrier: 5,
  Battleship: 4,
  Destroyer: 3,
  Submarine: 3,
  'Patrol Boat': 2
};

test('that every ship object type is added to the testBoardObject and that every ship is to length', () => {
  expect(aiRandomBoard(testBoardObject, true)).toBe(true);

  const testShipObjects = [];

  testBoardObject.board.forEach((indexOfY) => {
    indexOfY.forEach((indexOfX) => {
      if (indexOfX.ship !== null) testShipObjects.push(indexOfX);
    });
  });

  const testShipObjectCountLength = testShipObjects.reduce((current, next) => {
    const currentObject = current;

    if (currentObject[next.ship.type]) {
      currentObject[next.ship.type] += 1;
    } else currentObject[next.ship.type] = 1;

    return currentObject;
  }, {});

  expect(testShipObjectCountLength).toMatchObject(
    testShipObjectCountLengthTemplate
  );
});

test('testBoardObject and testBoardObjectCopy should not match', () => {
  testBoardObject.board.forEach((indexOfY) => {
    indexOfY.forEach((indexOfX) => {
      const boardCellObject = indexOfX;

      boardCellObject.ship = null;
    });
  });

  const testBoardObjectCopy = JSON.parse(JSON.stringify(testBoardObject));

  expect(testBoardObject.board).toStrictEqual(testBoardObjectCopy.board);

  aiRandomBoard(testBoardObject, true);
  aiRandomBoard(testBoardObjectCopy, true);

  expect(testBoardObject.board).not.toStrictEqual(testBoardObjectCopy.board);
});
