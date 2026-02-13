/**
 * LeetCode 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list (splicing the nodes).
 * Return the head of the merged linked list.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode|null} list1
 * @param {ListNode|null} list2
 * @return {ListNode|null}
 */
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(-1);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      tail.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    tail = tail.next;
  }

  while (list1) {
    tail.next = new ListNode(list1.val);
    list1 = list1.next;
    tail = tail.next;
  }

  while (list2) {
    tail.next = new ListNode(list2.val);
    list2 = list2.next;
    tail = tail.next;
  }

  return dummy.next;
}

module.exports = { mergeTwoLists, ListNode };
