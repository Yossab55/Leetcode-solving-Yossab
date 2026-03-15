/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let stringNumber = String(x);
  let reverseMul = 1;
  if (stringNumber[0] == "-") {
    reverseMul = -1;
    stringNumber = stringNumber.slice(1);
  }
  const reversedNumber =
    reverseMul * Number(stringNumber.split("").reverse().join(""));
  if (reversedNumber < -(2 ** 31) || reversedNumber > 2 ** 31 - 1) return 0;
  return reversedNumber;
};

console.log(reverse("-10"));
