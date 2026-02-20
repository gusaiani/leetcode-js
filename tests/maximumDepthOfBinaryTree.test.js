const { maxDepth, TreeNode } = require("../maximumDepthOfBinaryTree");

// Example 1: [3,9,20,null,null,15,7] → 3
test("balanced three-level tree", () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );
  expect(maxDepth(root)).toBe(3);
});

// Example 2: [1,null,2] → 2
test("right-only two-level tree", () => {
  const root = new TreeNode(1, null, new TreeNode(2));
  expect(maxDepth(root)).toBe(2);
});

test("empty tree", () => {
  expect(maxDepth(null)).toBe(0);
});

test("single node", () => {
  expect(maxDepth(new TreeNode(1))).toBe(1);
});

test("left-skewed tree", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))));
  expect(maxDepth(root)).toBe(4);
});

test("deeper on left than right", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
  expect(maxDepth(root)).toBe(3);
});
