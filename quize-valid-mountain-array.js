//In The name of Cross

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let changed = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i == 0 && arr[i] >= arr[i + 1]) return false;
    if (arr[i] == arr[i + 1]) return false;
    if (changed && arr[i] < arr[i + 1]) return false;
    if (arr[i] > arr[i + 1]) changed = true;
  }
  if (!changed) return false;
  return true;
};
