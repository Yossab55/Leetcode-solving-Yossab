//In the name of Cross
//Problem Link: https://leetcode.com/problems/regular-expression-matching/description/?envType=problem-list-v2&envId=w8mmmfij

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const expression = new RegExp(p);

  const result = s.match(expression);
  if (result == null) return false;
  return result[0].length != s.length ? false : true;
};

console.log(isMatch("a", "a"));
console.log(isMatch("a", "a."));
console.log(isMatch("a", "a*"));
console.log(isMatch("aaaaaaaa", "a*"));
console.log(isMatch("aa", "a"));
