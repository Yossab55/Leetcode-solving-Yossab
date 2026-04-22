/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = nums.concat(nums);
  return ans;
};

console.log(getConcatenation([1, 2, 1]));
