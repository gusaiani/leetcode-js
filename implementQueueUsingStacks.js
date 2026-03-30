/**
 * LeetCode 232. Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 *
 * Implement a first in first out (FIFO) queue using only two stacks.
 * The implemented queue should support all the functions of a normal queue
 * (push, peek, pop, and empty).
 *
 * Implement the MyQueue class:
 * - void push(int x) — Pushes element x to the back of the queue.
 * - int pop() — Removes the element from the front of the queue and returns it.
 * - int peek() — Returns the element at the front of the queue.
 * - boolean empty() — Returns true if the queue is empty, false otherwise.
 *
 * Notes:
 * - You must use only standard operations of a stack, which means only
 *   push to top, peek/pop from top, size, and is empty operations are valid.
 *
 * Constraints:
 * - 1 <= x <= 9
 * - At most 100 calls will be made to push, pop, peek, and empty.
 * - All the calls to pop and peek are valid.
 */

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (item) {
  this.stack1.push(item);
};

MyQueue.prototype.pop = function () {
  this.prepareOutput();
  return this.stack2.pop();
};

MyQueue.prototype.peek = function () {
  this.prepareOutput();
  return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

MyQueue.prototype.prepareOutput = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
};

module.exports = { MyQueue };
