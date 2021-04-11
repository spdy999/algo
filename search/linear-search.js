const linearSearch = (list, n) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === n) return true;
  }
  return false;
};

const recLinearSearch = (arr, start, end, wanted) => {
  if (start > end) return -1;
  if (arr[start] === wanted) return start;
  if (arr[end] === wanted) return end;
  return recLinearSearch(arr, start + 1, end - 1, wanted);
};

module.exports = {linearSearch, recLinearSearch};
