const { MinStack } = require("../minStack");

test("push, top, getMin, pop sequence", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toBe(-3);
  minStack.pop();
  expect(minStack.top()).toBe(0);
  expect(minStack.getMin()).toBe(-2);
});

test("single element", () => {
  const minStack = new MinStack();
  minStack.push(42);
  expect(minStack.top()).toBe(42);
  expect(minStack.getMin()).toBe(42);
});

test("push duplicate minimums", () => {
  const minStack = new MinStack();
  minStack.push(1);
  minStack.push(1);
  minStack.pop();
  expect(minStack.getMin()).toBe(1);
});
