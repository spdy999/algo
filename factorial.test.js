const {factorial} = require('./factorial');

test('Should return 6 if n=3', () => {
  expect(factorial(3)).toBe(6);
});

test('Should return 24 if n=4', () => {
  expect(factorial(4)).toBe(24);
});
