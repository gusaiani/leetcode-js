import { solution } from "../firstBadVersion";

function makeApi(firstBad: number): (version: number) => boolean {
  return (version: number) => version >= firstBad;
}

test("finds the first bad version in the middle", () => {
  expect(solution(makeApi(4))(5)).toBe(4);
});

test("first version is bad", () => {
  expect(solution(makeApi(1))(5)).toBe(1);
});

test("last version is the first bad one", () => {
  expect(solution(makeApi(5))(5)).toBe(5);
});

test("single version that is bad", () => {
  expect(solution(makeApi(1))(1)).toBe(1);
});

test("large range", () => {
  expect(solution(makeApi(1702766719))(2126753390)).toBe(1702766719);
});
