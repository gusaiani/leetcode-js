## Project structure

- Implementation files: `/<problemName>.js` (e.g., `jumpGame.js`)
- Test files: `/tests/<problemName>.test.js` (e.g., `tests/jumpGame.test.js`)
- Branch name: kebab-case problem name (e.g., `number-of-islands`)

Implementation file template:
```js
/**
 * LeetCode <number>. <Title>
 * <url>
 *
 * <problem description>
 */

/**
 * @param {<type>} <param>
 * @return {<type>}
 */
function <functionName>(<params>) {}

module.exports = { <functionName> };
```

Test file template:
```js
const { <functionName> } = require("../<problemName>");

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

Do not give hints about how to solve the problem.

Use the term "Stub job challenge" as a command to:

1. Pick a LeetCode challenge that maximizes odds of passing a technical interview for a senior frontend engineer role paying US$150-200k/year, remote from Brazil.
2. Consider which patterns and topics are missing from the repo's existing solved problems to fill the most impactful gap (e.g., BFS, DFS, dynamic programming, sliding window, stack, trie, graph traversal, matrix problems).
3. Difficulty: pick 50% easy problems, 40% medium problems, 10% hard.
4. "Stub challenge" from the choice of challenge above.
5. Explain why the chosen problem is relevant for frontend interviews at that salary range.
