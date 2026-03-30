const { MyQueue } = require("../implementQueueUsingStacks");

test("push and pop in FIFO order", () => {
  const queue = new MyQueue();
  queue.push(1);
  queue.push(2);
  expect(queue.pop()).toBe(1);
  expect(queue.pop()).toBe(2);
});

test("peek returns front without removing", () => {
  const queue = new MyQueue();
  queue.push(1);
  queue.push(2);
  expect(queue.peek()).toBe(1);
  expect(queue.peek()).toBe(1);
});

test("empty returns correct state", () => {
  const queue = new MyQueue();
  expect(queue.empty()).toBe(true);
  queue.push(1);
  expect(queue.empty()).toBe(false);
  queue.pop();
  expect(queue.empty()).toBe(true);
});

test("interleaved push and pop operations", () => {
  const queue = new MyQueue();
  queue.push(1);
  queue.push(2);
  expect(queue.pop()).toBe(1);
  queue.push(3);
  expect(queue.peek()).toBe(2);
  expect(queue.pop()).toBe(2);
  expect(queue.pop()).toBe(3);
  expect(queue.empty()).toBe(true);
});
