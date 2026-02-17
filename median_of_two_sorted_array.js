//In the name of Cross ✞
//Problem Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

import { it, expect } from "vitest";
/**
 * there is another solution
 * link of the video: https://youtu.be/xMBwzNvXmms?si=BTzt_N_Os2yHDFoa
 * look at this:
 * [1, 3, 8]
 * [7, 9, 10]
 * Now if you think about it there is only a lift side of the first array and right side
 * of the second array to be switched
 * [1, 3, | 8]
 * [7 | 9, 10] => [1, 3, 7, 8, 9, 10]
 * the idea is How to get this | to know where to split (because it may be more than one item)
 * binary search and logical operation
 * both arrays are sorted so binary search will split the array to half sorted this is the |
 * and this is how to search:
 *    for first array (left + right) / 2 = partition 1 (left and right to determine the range of the search)
 *    for second array (len1 + len2) / 2 - partition 1 (it's still binary search but we want it with the hole array)
 *      because solution needs it to be one array (result = partition1 + partition2)
 * so now the condition
 * [1, `3`, | ^8^]
 * [^7^ | `9`, 10]
 * `3` is maxLeft1 & `9` is minRight2 and (maxLeft1 <= minRight2) &
 * ^7^ is maxLeft2 & ^8^ is minRight1 and (maxLeft2 <= minRight1) if false then partition is right!
 * if this is false '(maxLeft1 <= minRight2)' then the variable: right = partition1 - 1
 * if this is false '(maxLeft2 <= minRight1)' then the variable: left = partition1 + 1
 * and yeah you only need to change right or left because it will change partition1 in the next loop
 * and partition2 is dependent on partition1 so it will also change
 */
/**
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number}
 */
var findMedianSortedArrays = function (numbers1, numbers2) {
  // It's just the merged part of the merge sort!!
  const sortedNumbers = merge(numbers1, numbers2);
  const size = sortedNumbers.length;
  if (size % 2 == 0) {
    const mid = size / 2;
    const median = (sortedNumbers[mid] + sortedNumbers[mid - 1]) / 2;
    return median;
  }

  const mid = Math.floor(size / 2);
  const median = sortedNumbers[mid];
  return median;
};

function merge(arr1, arr2) {
  const sortedArray = [];
  while (arr1.length && arr2.length) {
    let counterFor1 = 0;
    let counterFor2 = 0;
    if (arr1[counterFor1] <= arr2[counterFor2]) {
      sortedArray.push(arr1.shift());
      counterFor1++;
    } else {
      sortedArray.push(arr2.shift());
      counterFor2++;
    }
  }
  if (arr1.length) sortedArray.push(...arr1);

  if (arr2.length) sortedArray.push(...arr2);

  return sortedArray;
}
// test merge
it("should return sorted Array", () => {
  expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
});

it("should return sorted Array", () => {
  expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});

it("should return sorted Array", () => {
  expect(merge([1, 2, 7, 9], [3, 4, 5, 8])).toEqual([1, 2, 3, 4, 5, 7, 8, 9]);
});
// test median
it("should return median of sorted Array", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
});

it("should return median of sorted Array", () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
});

it("should return median of sorted Array", () => {
  expect(findMedianSortedArrays([1, 2, 7, 9], [3, 4, 5, 8])).toEqual(4.5);
});
