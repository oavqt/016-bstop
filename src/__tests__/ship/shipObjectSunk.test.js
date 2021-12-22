import shipObjectSunk from '../../ship/shipObjectSunk';

const testShipObjectShipwrecked = {
  ship: {
    layout: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  }
};

const testShipObjectStanding = {
  ship: { layout: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] }
};

const testBoardObject = {
  board: [
    [
      testShipObjectShipwrecked,
      testShipObjectShipwrecked,
      testShipObjectShipwrecked,
      testShipObjectShipwrecked,
      testShipObjectStanding,
      testShipObjectStanding,
      testShipObjectStanding,
      testShipObjectStanding
    ]
  ]
};

test('true, return annihilated', () => {
  expect(shipObjectSunk(testBoardObject, [0, 0])).toBe(true);
});

test('false, return standing', () => {
  expect(shipObjectSunk(testBoardObject, [0, 4])).toBe(false);
});
