//In the name of Cross
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var findDisappearedNumbers = function (numbers) {
  const allNumbersToN = Array.from({ length: numbers.length }, (_, i) => i + 1);
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    allNumbersToN[number - 1] = 0;
  }
  const result = allNumbersToN.filter((ele) => ele != 0);
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
