//In The Name of Cross
/**
 * 1. First shift from tokens
 * 2. and the number to the stack
 * 3. if operation pop the last two numbers = (last two operation last one)
 * 4. do this until tokens finsihdhed and return the result
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length == 1) return Number(tokens.shift());
  const operands = /^[+\-*/]$/;
  const stack = [];
  while (tokens.length) {
    const currentToken = tokens.shift();
    debugger;
    if (operands.test(currentToken)) {
      const firstNumber = Number(stack.pop());
      const secondNumber = Number(stack.pop());
      const result = calcFrom(firstNumber, secondNumber, currentToken);
      stack.push(result);

      debugger;
    } else {
      stack.push(currentToken);
      debugger;
    }
  }
  return stack.pop();
};

/**
 *
 * @param {string[]} stack
 * @param {string} operand
 */
function calcFrom(firstNumber, secondNumber, operand) {
  let result = 0;
  switch (operand) {
    case "+":
      result = secondNumber + firstNumber;
      break;
    case "-":
      result = secondNumber - firstNumber;
      break;
    case "/":
      result = Math.trunc(Number(secondNumber / firstNumber));
      break;
    case "*":
      result = secondNumber * firstNumber;
      break;
    default:
      break;
  }
  return result;
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["18"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
