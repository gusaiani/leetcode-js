import { canConstruct } from "../ransomNote";

test("returns false when a needed letter is missing", () => {
  expect(canConstruct("a", "b")).toBe(false);
});

test("returns false when a letter is reused beyond its supply", () => {
  expect(canConstruct("aa", "ab")).toBe(false);
});

test("returns true when all letters are available", () => {
  expect(canConstruct("aa", "aab")).toBe(true);
});

test("returns true for a single matching letter", () => {
  expect(canConstruct("a", "a")).toBe(true);
});

test("returns true when ransom note and magazine are equal", () => {
  expect(canConstruct("abc", "abc")).toBe(true);
});

test("returns false when magazine is shorter than the note", () => {
  expect(canConstruct("aabb", "ab")).toBe(false);
});
