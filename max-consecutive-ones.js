//In the name of Cross
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const onesLength = nums
    .join("")
    .split("0")
    .map((ele) => ele.length);
  console.log(onesLength);

  return Math.max(...onesLength);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
