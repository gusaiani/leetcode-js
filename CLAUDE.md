## Project structure

- Implementation files: `/<problemName>.ts` (e.g., `jumpGame.ts`)
- Test files: `/tests/<problemName>.test.ts` (e.g., `tests/jumpGame.test.ts`)
- Branch name: kebab-case problem name (e.g., `number-of-islands`)

The repo is TypeScript under `strict` mode. Type params and return values in the
signature (no JSDoc `@param`/`@return` types). Bun runs `.ts` directly — no build
step. `ListNode`/`TreeNode` helpers are ES6 classes (the LeetCode TS idiom).

Implementation file template:
```ts
/**
 * LeetCode <number>. <Title>
 * <url>
 *
 * <problem description>
 */

function <functionName>(<param>: <type>): <returnType> {}

export { <functionName> };
```

Test file template (`test`/`expect` are Bun globals — typed via `test-globals.d.ts`, do not import them):
```ts
import { <functionName> } from "../<problemName>";

test("<description>", () => {
  expect(<functionName>(<input>)).toBe(<expected>);
});
```

## Solved problems

Read `README.md` — the "Solved Problems" table is the source of truth for which problems are already solved and what patterns/approaches they cover. Use the Approach column to infer covered patterns when doing gap analysis.

---

Use the term "Stub challenge" as a command to

- create a branch
- implement a test file
- stub an implementation file for a given challenge.
- open Cursor with the test file and the implementation file: `cursor tests/<problemName>.test.ts <problemName>.ts`

Do not give hints about how to solve the problem.

Use the term "Stub job challenge" as a command to:

1. Pick a LeetCode challenge that maximizes odds of passing a technical interview for a senior frontend engineer role paying US$150-200k/year, remote from Brazil.
2. Consider which patterns and topics are missing from the repo's existing solved problems to fill the most impactful gap (e.g., BFS, DFS, dynamic programming, sliding window, stack, trie, graph traversal, matrix problems).
3. Difficulty: pick 50% easy problems, 40% medium problems, 10% hard.
4. "Stub challenge" from the choice of challenge above.
5. Explain why the chosen problem is relevant for frontend interviews at that salary range.
