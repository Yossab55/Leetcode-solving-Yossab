//In the name of Cross
//Problem link: https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function (s) {
  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);
  s = s.trim();

  let sign = 1;
  if (s[0] == "-") {
    sign = -1;
    s = s.slice(1);
  } else if (s[0] == "+") {
    s = s.slice(1);
  }
  console.log(s);
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    if (!/\d/.test(s[i]) && i != 0) break;

    if (!/\d/.test(s[i])) {
      return 0;
    }

    number = number * 10 + Number(s[i]);
  }
  number = sign * number;
  if (number > MAX_INT) return MAX_INT;
  if (number < MIN_INT) return MIN_INT;
  return number;
};

console.log(myAtoi("1337c0d3"));
console.log(myAtoi("4193 with words"));
