/**
 * LeetCode 112. Path Sum
 * https://leetcode.com/problems/path-sum/description/
 *
 * Given the root of a binary tree and an integer targetSum, return true if
 * the tree has a root-to-leaf path such that adding up all the values along
 * the path equals targetSum. A leaf is a node with no children.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode|null} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  const newTarget = targetSum - root.val;
  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget)
}

module.exports = { hasPathSum, TreeNode };
