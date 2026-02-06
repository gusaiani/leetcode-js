const wework = require("../weworkLargestTable");

test("First one", () => {
  grid = [
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ];

  expect(wework(grid)).toBe(8);
});

test("Second one", () => {
  grid = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ];

  expect(wework(grid)).toBe(6);
});
