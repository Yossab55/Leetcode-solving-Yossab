//In the name of Cross
//Problem link: https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  if (Math.sign(x) == -1) return false;
  if (Math.sign(x) == 0) return true;

  const reversed = Number(String(x).split("").reverse().join(""));

  return reversed == x;
};

console.log(Math.sign(-20));
console.log(Math.sign(10));
console.log(Math.sign(0));
