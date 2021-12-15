import dummy from '../dummy';

test.only('test', () => {
  expect(dummy('yes')).toBe('yes');
});
