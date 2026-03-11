/**
 * LeetCode 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 *
 * Given the roots of two binary trees root and subRoot, return true if there
 * is a subtree of root with the same structure and node values as subRoot,
 * and false otherwise.
 *
 * A subtree of a binary tree is a tree that consists of a node in the tree
 * and all of its descendants.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(s, t) {
  if (!s && !t) return true;
  if (!s || !t) return false;
  if (s.val !== t.val) return false;
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

module.exports = { TreeNode, isSubtree };
