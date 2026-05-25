//In the name of Cross
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];
  let i = 0;
  while (i < heights.length) {
    if (stack.length == 0 || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      const top = stack.pop();
      const left = stack.length == 0 ? -1 : stack[stack.length - 1]; //first -1 because it will be the last element
      const right = i;
      const area = heights[top] * (right - left - 1);
      maxArea = Math.max(area, maxArea);
    }
  }

  while (stack.length) {
    const top = stack.pop();
    //i here because you're going from right to left so i is the right boundary
    const width = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
    const area = heights[top] * width;
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
};

console.log(largestRectangleArea([2, 8, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([1, 1]));
console.log(largestRectangleArea([4, 2]));
console.log(largestRectangleArea([2, 0, 2]));
console.log(largestRectangleArea([2, 1, 2]));
console.log(largestRectangleArea([10, 8, 10, 8]));
console.log(largestRectangleArea([5, 4, 1, 2]));
