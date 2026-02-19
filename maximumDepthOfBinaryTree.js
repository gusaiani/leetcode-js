/**
 * LeetCode 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along
 * the longest path from the root node down to the farthest leaf node.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode|null} root
 * @return {number}
 */
function maxDepth(root, depth = 0) {
  if (!root) return depth;

  let leftDepth = 0;
  let rightDepth = 0;

  depth++;

  if (root.left) {
    leftDepth = maxDepth(root.left, depth) ?? 0;
  }

  if (root.right) {
    rightDepth = maxDepth(root.right, depth) ?? 0;
  }

  depth = Math.max(depth, leftDepth, rightDepth);

  return depth;
}

module.exports = { maxDepth, TreeNode };
