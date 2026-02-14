const {
  deleteDuplicates,
  ListNode,
} = require("../removeDuplicatesFromSortedList");

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

// Example 1: [1,1,2] → [1,2]
test("removes one duplicate", () => {
  const head = fromArray([1, 1, 2]);
  expect(toArray(deleteDuplicates(head))).toEqual([1, 2]);
});

// Example 2: [1,1,2,3,3] → [1,2,3]
test("removes multiple duplicates", () => {
  const head = fromArray([1, 1, 2, 3, 3]);
  expect(toArray(deleteDuplicates(head))).toEqual([1, 2, 3]);
});

test("empty list", () => {
  expect(deleteDuplicates(null)).toBeNull();
});

test("single element", () => {
  const head = fromArray([1]);
  expect(toArray(deleteDuplicates(head))).toEqual([1]);
});

test("all elements the same", () => {
  const head = fromArray([1, 1, 1, 1]);
  expect(toArray(deleteDuplicates(head))).toEqual([1]);
});

test("no duplicates", () => {
  const head = fromArray([1, 2, 3]);
  expect(toArray(deleteDuplicates(head))).toEqual([1, 2, 3]);
});