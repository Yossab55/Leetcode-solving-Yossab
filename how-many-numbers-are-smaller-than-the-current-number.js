//In the Name of Cross
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    let counter = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (j == i) continue;

      if (numbers[j] < numbers[i]) counter++;
    }
    result.push(counter);
  }
  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
