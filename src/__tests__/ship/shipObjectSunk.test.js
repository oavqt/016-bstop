import shipObjectSunk from '../../ship/shipObjectSunk';

const testShipObjectShipwrecked = {
  ship: {
    isSunk: false,
    layout: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  }
};

const testShipObjectStanding = {
  ship: {
    isSunk: false,
    layout: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]']
  }
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

test('ships isSunk property set to true, return shipwrecked', () => {
  expect(shipObjectSunk(testBoardObject, [0, 0], true)).toBe(true);
  expect(testShipObjectShipwrecked.ship.isSunk).toBe(true);
});

test('ships isSunk property set to false, return standing', () => {
  expect(shipObjectSunk(testBoardObject, [0, 4], true)).toBe(false);
  expect(testShipObjectStanding.ship.isSunk).toBe(false);
});
