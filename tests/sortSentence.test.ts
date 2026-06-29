import { sortSentence } from "../sortSentence";

test("reconstructs a four-word sentence", () => {
  expect(sortSentence("is2 sentence4 This1 a3")).toBe("This is a sentence");
});

test("reconstructs a sentence already in order", () => {
  expect(sortSentence("Myself2 Me1 I4 and3")).toBe("Me Myself and I");
});

test("handles a two-word sentence", () => {
  expect(sortSentence("word2 hello1")).toBe("hello word");
});

test("handles a single-word sentence", () => {
  expect(sortSentence("Hello1")).toBe("Hello");
});

test("handles the maximum of nine words", () => {
  expect(sortSentence("a9 b8 c7 d6 e5 f4 g3 h2 i1")).toBe("i h g f e d c b a");
});
