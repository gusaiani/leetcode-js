const { jobScheduling } = require("../jobScheduling");

test("example 1 — overlapping jobs", () => {
  expect(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])).toBe(120);
});

test("example 2 — all overlapping, pick best two", () => {
  expect(jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])).toBe(150);
});

test("example 3 — non-overlapping jobs", () => {
  expect(jobScheduling([1, 1, 1], [2, 3, 4], [5, 6, 4])).toBe(6);
});

test("single job", () => {
  expect(jobScheduling([1], [2], [50])).toBe(50);
});

test("all jobs can be taken", () => {
  expect(jobScheduling([1, 3, 5], [2, 4, 6], [10, 20, 30])).toBe(60);
});
