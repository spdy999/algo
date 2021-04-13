const {merge, mergeSort} = require('./merge-sort');

test('left and right size is equal', ()=> {
  const left = [2, 3, 5, 7];
  const right = [6, 1, 4, 8];
  const expectedMerged = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(mergeSort([...left, ...right])).toEqual(expectedMerged);
});

test('left size < right size', ()=> {
  const left = [2, 5, 3];
  const right = [7, 6, 1, 4];
  const expectedMerged = [1, 2, 3, 4, 5, 6, 7];
  expect(mergeSort([...left, ...right])).toEqual(expectedMerged);
});

test('Merge function', ()=> {
  const left = [2, 3, 5, 7];
  const right = [1, 4, 6, 8];
  const expectedMerged = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(merge(left, right)).toEqual(expectedMerged);
});
