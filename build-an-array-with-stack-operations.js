//In the name of cross
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const result = [];
  const PUSH = "Push";
  const POP = "Pop";
  let counter = 0;
  for (let stream = 1; stream < n; stream++) {
    if (stream == target[counter]) {
      counter++;
      result.push(PUSH);
    } else {
      result.push(PUSH, POP);
    }
    // console.log(`stream is: ${stream}, Counter: ${counter}, Result: ${result}`);
    if (counter == target.length) break;
  }
  return result;
};

console.log(buildArray([1, 3], 4));
console.log(buildArray([1, 2], 4));
console.log(buildArray([1, 2, 3], 4));
