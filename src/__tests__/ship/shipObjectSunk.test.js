import shipObjectSunk from '../../ship/shipObjectSunk';

const testAnnihilated = {
  ship: {
    layout: ['[-][-]', '[-][-]', '[-][-]', '[-][-]', '[-][-]']
  }
};

const testAlive = {
  ship: { layout: ['[-][-]', '[-][-]', '[-][-]', '[0][3]', '[0][4]'] }
};

test('true, return annihilated', () => {
  expect(shipObjectSunk(testAnnihilated.ship)).toBe(true);
});

test('false, return alive', () => {
  expect(shipObjectSunk(testAlive.ship)).toBe(false);
});
