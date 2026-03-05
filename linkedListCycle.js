/**
 * LeetCode 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can
 * be reached again by continuously following the next pointer.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  const values = new Set();

  while (head) {
    if (values.has(head)) {
      return true;
    }

    values.add(head);

    head = head.next;
  }
  return false;
}

module.exports = { ListNode, hasCycle };
