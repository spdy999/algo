const {bubbleSort} = require('./bubble-sort');

test('Should sort an array', () => {
  const arr = [2, 3, 1, 4, 5];
  const sortedArr = [1, 2, 3, 4, 5];
  expect(bubbleSort(arr, arr.length - 2)).toEqual(sortedArr);
});
