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

// better approach
var lengthOfLongestSubstring2 = function (s) {
  let maxLength = 0;
  let currentLength = 0;
  const seenChars = new Map();
  let windowStart = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    // If we've seen this character within our current window
    if (
      seenChars.has(currentChar) &&
      seenChars.get(currentChar) >= windowStart
    ) {
      // Move window start past the previous occurrence
      windowStart = seenChars.get(currentChar) + 1;
      // Update current length based on new window size
      currentLength = i - windowStart + 1;
    } else {
      currentLength++;
    }

    // Update last seen index
    seenChars.set(currentChar, i);
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};
