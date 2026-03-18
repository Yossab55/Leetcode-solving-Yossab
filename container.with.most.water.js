//In the Name of Cross
//Problem link: https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=w8mmmfij

// كل خطين لو بالطول لو شديت خط بالعرض هيطلع مستطيل اهو احنا بندور علي اطول مستطيل فيهم الي هيشيل أكثر ماية
// ولا بعدها بتجيب المساحة بتاعت المستطيل وهو ده أكبر حاجة فخلي بالك
// if (height.length == 2) return height[0] * height[1];
/**
 * What do you need?
 * 1. max of the first line
 * 2. max of the next line
 * 3. max of the space between them
 * The answer is with two pointer one in the first and the other is in the end
 * area = length of lowest pointer * the space between them
 * and move the lowest of them one forwade if it's was the left one and
 * backword if the lowest was the right one
 * every time chick for the max area
 * stop when there is overlapping
 */
import { it, expect } from "vitest";

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;
  while (start < end) {
    // Get now area and update max Area
    const shortest = height[start] > height[end] ? height[end] : height[start];
    const nowArea = shortest * (end - start);
    if (nowArea > maxArea) maxArea = nowArea;

    //See who is the shortest and move it one block
    if (height[start] < height[end]) start++;
    else end--;
  }
  return maxArea;
};

it("Should return 49 with [1,8,6,2,5,4,8,3,7]", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

it("Should return 1 with [1,1]", () => {
  expect(maxArea([1, 1])).toBe(1);
});
