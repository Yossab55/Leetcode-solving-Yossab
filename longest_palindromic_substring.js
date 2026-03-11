//In the name of Cross ✞
//Link of the problem: https://leetcode.com/problems/longest-palindromic-substring/description/
import { it, expect } from "vitest";
/**
 * @param {string} s
 * @return {string}
 */
// Definition: A substring is palindromic if it reads
// identically from left to right and right to left
// var longestPalindrome = function (string) {
//   if (string.length <= 1) return string;
//   const result = {
//     start: 0,
//     end: 0,
//   };
//   for (let i = 0; i < string.length; i++) {
//     const middle = string[i];
//     let previous = i - 1;
//     let next = i + 1;

//     while (previous >= -1 && next < string.length) {
//       // if (middle == string[previous]) previous--;
//       // if (string[previous] != string[next]) break;

//       if (string[previous] == string[next]) {
//         const nowMaxLength = result.end - result.start + 1;
//         const currentSize = next - previous + 1;
//         if (currentSize >= nowMaxLength) {
//           result.start = previous;
//           result.end = next;
//         }
//         next++;
//         previous--;
//       } else if (middle == string[next] && string[previous] == undefined) {
//         const nowMaxLength = result.end - result.start + 1;
//         const currentSize = next - i + 1;
//         if (currentSize >= nowMaxLength) {
//           result.start = i;
//           result.end = next;
//         }
//         next++;
//       } else if (next - i == 1 && string[next] == middle) {
//         let counter = i;
//         while (string[counter] == middle) {
//           counter++;
//         }
//         next = counter - 1;
//         const nowMaxLength = result.end - result.start + 1;
//         const currentSize = next - i + 1;
//         if (currentSize >= nowMaxLength) {
//           result.start = i;
//           result.end = next;
//         }
//         next++;
//       } else break;
//     }
//   }
//   return string.slice(result.start, result.end + 1);
// };
//Deep sick answer
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0,
    end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // after the loop, left and right are one step beyond the palindrome
    return [left + 1, right - 1];
  }

  for (let i = 0; i < s.length; i++) {
    // odd length palindrome
    const [l1, r1] = expandAroundCenter(i, i);
    // even length palindrome
    const [l2, r2] = expandAroundCenter(i, i + 1);

    if (r1 - l1 > end - start) {
      start = l1;
      end = r1;
    }
    if (r2 - l2 > end - start) {
      start = l2;
      end = r2;
    }
  }

  return s.substring(start, end + 1);
};

it("should return ssssss with ssssss length of 6", () => {
  expect(longestPalindrome("ssssss")).toEqual("ssssss");
});

it("should return ssssss with ssssss length of 5", () => {
  expect(longestPalindrome("sssss")).toEqual("sssss");
});

it("should return bab with babad", () => {
  expect(longestPalindrome("babad")).toBeOneOf(["bab", "aba"]);
});

it("should return bbbb with cbbbbd", () => {
  expect(longestPalindrome("cbbbbd")).toEqual("bbbb");
});

it("should return bbbb with cbbbbc", () => {
  expect(longestPalindrome("cbbbbc")).toEqual("cbbbbc");
});

it("should return ccc with ccc", () => {
  expect(longestPalindrome("ccc")).toEqual("ccc");
});

it("should return racecar with racecar", () => {
  expect(longestPalindrome("racecar")).toEqual("racecar");
});

it("should return bacab with bacabab", () => {
  expect(longestPalindrome("bacabab")).toEqual("bacab");
});

it("should return tattarrattat with tattarrattat", () => {
  expect(longestPalindrome("tattarrattat")).toEqual("tattarrattat");
});

it("should return cc with ccd", () => {
  expect(longestPalindrome("ccd")).toEqual("cc");
});

it("should return a or c with ac", () => {
  expect(longestPalindrome("ac")).toBeOneOf(["a", "c"]);
});

it("should return bbcccbb with abbcccbbbcaaccbababcbcabca", () => {
  expect(longestPalindrome("abbcccbbbcaaccbababcbcabca")).toBeOneOf([
    "bbcccbb",
    "cbababc",
  ]);
});
