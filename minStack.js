/**
 * LeetCode 155. Min Stack
 * https://leetcode.com/problems/min-stack/
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 *
 * You must implement a solution with O(1) time complexity for each function.
 */

const MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/** * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    const currentMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(val, currentMin));
  }
};

/* @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/* @return {number} */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/* @return {number} */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

module.exports = { MinStack };
