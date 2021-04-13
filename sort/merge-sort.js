const merge = (left, right) => {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }
  const merged = [...sorted, ...left, ...right];

  return merged;
};

const mergeSort = (arr) =>{
  const half = Math.floor(arr.length / 2);
  if (arr.length < 2) return arr;

  const left = arr.slice(0, half);
  const right = arr.slice(half);
  return merge(mergeSort(left), mergeSort(right));
};

module.exports = {
  mergeSort,
  merge,
};
