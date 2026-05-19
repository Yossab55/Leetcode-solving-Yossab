//IN the name of Cross

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const length = temperatures.length;
  const result = new Array(length).fill(0);
  const increasingStack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      increasingStack.length > 0 &&
      temperatures[i] >
        temperatures[increasingStack[increasingStack.length - 1]]
    ) {
      const index = increasingStack.pop();
      result[index] = i - index;
    }

    increasingStack.push(i);
  }
  return result;
};

console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
