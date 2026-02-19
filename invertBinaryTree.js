/**
 * LeetCode 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/description/
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode|null} root
 * @return {TreeNode|null}
 */
function invertTree(root) {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

module.exports = { invertTree, TreeNode };
