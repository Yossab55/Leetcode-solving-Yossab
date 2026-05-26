//In the name of cross
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    if (sum < 10) {
      digits[i] = sum;
      break;
    }
    digits[i] = 10 - sum;
    if (i == 0) digits.unshift(carry);
  }
  return digits;
};
