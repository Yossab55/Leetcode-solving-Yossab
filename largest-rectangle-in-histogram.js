//In the name of Cross
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const result = Array.from(heights);
  const stack = [];
  let rectangleArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let minimumHight = Infinity;
    while (stack.length > 0 && heights[i] >= heights[stack[stack.length - 1]]) {
      const index = stack.pop();
      const indexHight = heights[index];
      //If hight = 0 then if you cont this column are will be zero so we should stop it
      if (indexHight == 0) {
        stack.push(index);
        break;
      }
      const currentHight = heights[i];
      const minHight = Math.min(indexHight, currentHight, minimumHight); // if the width is longer than 2 you will need to chick minimumHight
      const widthBetweenThem = i - index + 1; //+1 because the column it self

      const area = minHight * widthBetweenThem;

      if (area >= rectangleArea) {
        rectangleArea = area;
        minimumHight = minHight;
      }
    }
    stack.push(i);
  }
  // //reset the stack
  // stack.splice(0);
  // let widthBetweenThem = 1;
  // for (let i = 0; i < heights.length; i++) {
  //   let minimumHight = Infinity;
  //   while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
  //     const index = stack.pop();
  //     const indexHight = heights[index];
  //     //If hight = 0 then if you cont this column are will be zero so we should stop it
  //     if (indexHight == 0) {
  //       stack.push(index);
  //       break;
  //     }

  //     const currentHight = heights[i];
  //     const minHight = Math.min(indexHight, currentHight, minimumHight); // if the width is longer than 2 you will need to chick minimumHight
  //     if (i - 1 != index) {
  //       widthBetweenThem = i - index + 1; //+1 because the column it self
  //     } else widthBetweenThem++;

  //     const area = minHight * widthBetweenThem;

  //     if (area >= rectangleArea) {
  //       rectangleArea = area;
  //       minimumHight = minHight;
  //     }
  //   }
  //   stack.push(i);
  // }

  if (rectangleArea == 0) rectangleArea = Math.max(...heights);

  return rectangleArea;
};
// console.log(`area: ${area}, minHight: ${minHight}, width: ${widthBetweenThem}`,);

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([1, 1]));
console.log(largestRectangleArea([4, 2]));
console.log(largestRectangleArea([2, 0, 2]));
console.log(largestRectangleArea([2, 1, 2]));

console.log(largestRectangleArea([10, 8, 7])); //what you will do in this case :)
