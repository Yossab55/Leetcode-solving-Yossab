//In the name of Cross
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [0, 0];
  let isFirst = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) result[0] = nums[i];
    if (nums[i] != i + 1 && nums[i + 1] != i + 1 && isFirst) {
      result[1] = i + 1;
      isFirst = false;
    }
  }
  return result;
};
/**
 * What in need the result: [the duplicated array, the missing number]
 *
 */
console.log(findErrorNums([1, 3, 2, 2, 5]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 3, 2]));
console.log(findErrorNums([3, 2, 3, 4, 6, 5]));
console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9])); // 2, 10
