import boardCoordinates from '../../gameboard/boardCoordinates';

const testBoardObject = {
  board: [
    [
      { coords: { cell: null, display: null } },
      { coords: { cell: null, display: null } },
      { coords: { cell: null, display: null } }
    ],
    [
      { coords: { cell: null, display: null } },
      { coords: { cell: null, display: null } },
      { coords: { cell: null, display: null } }
    ],
    [
      { coords: { cell: null, display: null } },
      { coords: { cell: null, display: null } },
      { coords: { cell: null, display: null } }
    ]
  ]
};

const testBoardObjectCoordinate = {
  board: [
    [
      { coords: { cell: '[0][0]', display: '[a][0]' } },
      { coords: { cell: '[0][1]', display: '[a][1]' } },
      { coords: { cell: '[0][2]', display: '[a][2]' } }
    ],
    [
      { coords: { cell: '[1][0]', display: '[b][0]' } },
      { coords: { cell: '[1][1]', display: '[b][1]' } },
      { coords: { cell: '[1][2]', display: '[b][2]' } }
    ],
    [
      { coords: { cell: '[2][0]', display: '[c][0]' } },
      { coords: { cell: '[2][1]', display: '[c][1]' } },
      { coords: { cell: '[2][2]', display: '[c][2]' } }
    ]
  ]
};

test('return a modified array(testBoard) matching the testBoardCoordinate', () => {
  expect(boardCoordinates(testBoardObject)).toStrictEqual(
    testBoardObjectCoordinate
  );
});
