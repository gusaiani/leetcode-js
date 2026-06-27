import validParentheses from "../validParentheses";

test('"" should return true', () => {
  expect(validParentheses("")).toBeTruthy();
});

test("( should return false", () => {
  expect(validParentheses("(")).toBeFalsy();
});

test(") should return false", () => {
  expect(validParentheses(")")).toBeFalsy();
});

test("() should return true", () => {
  expect(validParentheses("()")).toBeTruthy();
});

test("()[]{} should return true", () => {
  expect(validParentheses("()[]{}")).toBeTruthy();
});

test("(] should return false", () => {
  expect(validParentheses("(]")).toBeFalsy();
});

test("([)] should return false", () => {
  expect(validParentheses("([)]")).toBeFalsy();
});

test("([]) should return true", () => {
  expect(validParentheses("([])")).toBeTruthy();
});

test("{[]} should return true", () => {
  expect(validParentheses("{[]}")).toBeTruthy();
});

test("(()( should return false", () => {
  expect(validParentheses("(()(")).toBeFalsy();
});

test("(( should return false", () => {
  expect(validParentheses("((")).toBeFalsy();
});

test("{[}] should return false", () => {
  expect(validParentheses("{[}]")).toBeFalsy();
});

test("(([]){}) should return true", () => {
  expect(validParentheses("(([]){})")).toBeTruthy();
});

test("[([]]) should return false", () => {
  expect(validParentheses("[([]])")).toBeFalsy();
});

test("{}{}()[] should return true", () => {
  expect(validParentheses("{}{}()[]")).toBeTruthy();
});

test("{}[{}]((){})(){} should return true", () => {
  expect(validParentheses("{}[{}]((){})(){}")).toBeTruthy();
});
