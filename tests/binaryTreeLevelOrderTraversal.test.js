const { levelOrder, TreeNode } = require("../binaryTreeLevelOrderTraversal");

// Example 1: [3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]
test("three-level tree", () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );
  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
});

// Example 2: [1] → [[1]]
test("single node", () => {
  const root = new TreeNode(1);
  expect(levelOrder(root)).toEqual([[1]]);
});

// Example 3: [] → []
test("empty tree", () => {
  expect(levelOrder(null)).toEqual([]);
});

test("left-skewed tree", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
  expect(levelOrder(root)).toEqual([[1], [2], [3]]);
});

test("right-skewed tree", () => {
  const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
  expect(levelOrder(root)).toEqual([[1], [2], [3]]);
});

test("complete binary tree", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  );
  expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
});
