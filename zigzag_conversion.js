//In the name of cross ✝️
// Code problem: https://leetcode.com/problems/zigzag-conversion/description/

import { it, expect } from "vitest";
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows == 1) return s;

  const zigzag = [];
  for (let i = 0; i < numRows; i++) zigzag.push([]);

  let currentRow = 0;
  let step = 1;
  for (const char of s) {
    zigzag[currentRow].push(char);
    currentRow += step;
    if (currentRow == 0 || currentRow == numRows - 1) step = -step;
  }

  const result = zigzag.flat().join("");
  return result;
};

var convertByFormal = function (s, numRows) {
  if (numRows == 1) return s;

  const zigzag = [];
  for (let i = 0; i < numRows; i++) zigzag.push([]);
};
it("should give me PAHNAPLSIIGYIR with PAYPALISHIRING & numRows 3", () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

it("should give me PINALSIGYAHRPI with PAYPALISHIRING & numRows 4", () => {
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});

/**
 * 1. create the zigzag
 * 2. join the string together
 */
/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
 */
