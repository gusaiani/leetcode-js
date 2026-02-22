const { canFinish } = require("../courseSchedule");

// Example 1: take course 0 first, then course 1 — no cycle
test("two courses, one prerequisite — can finish", () => {
  expect(canFinish(2, [[1, 0]])).toBe(true);
});

// Example 2: course 0 requires 1, course 1 requires 0 — cycle
test("two courses with a cycle — cannot finish", () => {
  expect(
    canFinish(2, [
      [1, 0],
      [0, 1],
    ]),
  ).toBe(false);
});

// No prerequisites — always possible
test("no prerequisites", () => {
  expect(canFinish(5, [])).toBe(true);
});

// Single course, no prerequisites
test("single course", () => {
  expect(canFinish(1, [])).toBe(true);
});

// Linear chain — no cycle
test("linear chain of prerequisites", () => {
  expect(
    canFinish(4, [
      [1, 0],
      [2, 1],
      [3, 2],
    ]),
  ).toBe(true);
});

// DAG with shared dependency — no cycle
test("two courses depend on the same course", () => {
  expect(
    canFinish(3, [
      [1, 0],
      [2, 0],
    ]),
  ).toBe(true);
});

// Three-node cycle
test("three-node cycle — cannot finish", () => {
  expect(
    canFinish(3, [
      [0, 1],
      [1, 2],
      [2, 0],
    ]),
  ).toBe(false);
});

// Disconnected graph — some courses have no prerequisites
test("disconnected graph — can finish", () => {
  expect(
    canFinish(4, [
      [1, 0],
      [3, 2],
    ]),
  ).toBe(true);
});
