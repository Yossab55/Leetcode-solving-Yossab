//In the Name of Cross ✞
// Problem link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
import { it, expect } from "vitest";
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let tempMax = 0;
  let shownSet = new Set();
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (shownSet.has(s[i])) {
      shownSet.clear();
      max = max >= tempMax ? max : tempMax;
      tempMax = 0;
      start++;
      i = start; // for dvdf you need to come back from where you come
    }
    tempMax++;
    shownSet.add(s[i]);
  }
  if (tempMax > 0) {
    max = max >= tempMax ? max : tempMax;
  }
  return max;
};
/**
 * Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. 
Note that "bca" and "cab" are also correct answers.
 */
// test

it("should give me 3 with abcabccbb", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

it("should give me 3 with pwwkew", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});

it("should give me 1 with bbbbbbbbb", () => {
  expect(lengthOfLongestSubstring("bbbbbbb")).toEqual(1);
});

it("should give me 1 with ' '", () => {
  expect(lengthOfLongestSubstring(" ")).toEqual(1);
});

it("should give me 2 with 'au'", () => {
  expect(lengthOfLongestSubstring("au")).toEqual(2);
});

it("should give me 3 with 'dvdf'", () => {
  expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
});
