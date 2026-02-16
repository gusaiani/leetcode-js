const { reverseList, ListNode } = require("../reverseLinkedList");

function fromArray(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
}

function toArray(head) {
  const out = [];
  for (let p = head; p !== null; p = p.next) out.push(p.val);
  return out;
}

// Example 1: [1,2,3,4,5] → [5,4,3,2,1]
test("[1,2,3,4,5] → [5,4,3,2,1]", () => {
  expect(toArray(reverseList(fromArray([1, 2, 3, 4, 5])))).toEqual([5, 4, 3, 2, 1]);
});

// Example 2: [1,2] → [2,1]
test("[1,2] → [2,1]", () => {
  expect(toArray(reverseList(fromArray([1, 2])))).toEqual([2, 1]);
});

// Example 3: [] → []
test("empty list", () => {
  expect(reverseList(null)).toBeNull();
});

// Single element
test("[1] → [1]", () => {
  expect(toArray(reverseList(fromArray([1])))).toEqual([1]);
});

// Three elements
test("[1,2,3] → [3,2,1]", () => {
  expect(toArray(reverseList(fromArray([1, 2, 3])))).toEqual([3, 2, 1]);
});

// Negative values
test("[-1,0,1] → [1,0,-1]", () => {
  expect(toArray(reverseList(fromArray([-1, 0, 1])))).toEqual([1, 0, -1]);
});

// Duplicate values
test("[1,1,2,2] → [2,2,1,1]", () => {
  expect(toArray(reverseList(fromArray([1, 1, 2, 2])))).toEqual([2, 2, 1, 1]);
});
