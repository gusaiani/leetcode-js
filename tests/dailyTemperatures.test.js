const { dailyTemperatures } = require("../dailyTemperatures");

test("general case with mixed temperatures", () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
});

test("all decreasing temperatures", () => {
  expect(dailyTemperatures([30, 20, 10])).toEqual([0, 0, 0]);
});

test("all increasing temperatures", () => {
  expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
});

test("single element", () => {
  expect(dailyTemperatures([50])).toEqual([0]);
});

test("all same temperatures", () => {
  expect(dailyTemperatures([70, 70, 70])).toEqual([0, 0, 0]);
});
