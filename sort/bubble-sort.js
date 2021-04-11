const bubbleSort = (list, lastInd) => {
  if (lastInd === 1) return list;
  const bubbledList = list.slice(0, -1).reduce((acc, current, i) => {
    const cur = acc[i];
    const next = list[i + 1];
    if (cur < next) return [...acc, next];
    if (i === 0 && next > cur) return [next, cur];
    return [...acc.slice(0, -1), next, cur];
  }, [list[0]]);

  return bubbleSort(bubbledList, lastInd - 1);
};

module.exports = {bubbleSort};
