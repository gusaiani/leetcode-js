/**
 * LeetCode 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted
 * in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  // Continue merging pairs until only one list remains
  while (lists.length > 1) {
    let mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
};

/**
 * Standard helper to merge two sorted linked lists
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // Attach the remaining nodes from whichever list isn't empty
  curr.next = l1 || l2;
  return dummy.next;
};

module.exports = { mergeKLists };
