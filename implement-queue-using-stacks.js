// var MyQueue = function () {
//   this.queue = [];
// };

const { onTestFinished } = require("vitest");

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//   this.queue.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//   const item = this.queue.shift();
//   return item;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//   return this.queue[0];
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//   if (this.queue.length) return false;

//   return true;
// };
var MyQueue = function () {
  this.queue = [];
  this.stackHelper = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.queue.length) {
    const item = this.queue.pop();
    this.stackHelper.push(item);
    if (this.queue.length == 1) break;
  }
  const result = this.queue.pop();
  while (this.stackHelper.length) {
    const item = this.stackHelper.pop();
    this.queue.push(item);
  }
  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.queue.length) {
    const item = this.queue.pop();
    this.stackHelper.push(item);
  }
  const result = this.stackHelper.pop();
  this.queue.push(result);

  while (this.stackHelper.length) {
    const item = this.stackHelper.pop();
    this.queue.push(item);
  }
  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.queue.length) return false;

  return true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
