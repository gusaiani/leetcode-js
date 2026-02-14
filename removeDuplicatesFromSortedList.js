/**
 * LeetCode 83. Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * Given the head of a sorted linked list, delete all duplicates such that
 * each element appears only once. Return the linked list sorted as well.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) return null;

  let current = head;

  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

module.exports = { deleteDuplicates, ListNode };
