// In the name of Cross
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const x = nums.splice(0, n);
  const result = [];
  console.log(x, nums);

  for (let i = 0; i < n; i++) {
    result.push(x[i]);
    result.push(nums[i]);
  }
  return result;
};

console.log(shuffle([1, 2, 3, 1, 2, 3], 3));
