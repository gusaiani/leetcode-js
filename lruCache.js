/**
 * LeetCode 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 *
 * Design a data structure that follows the constraints of a Least Recently
 * Used (LRU) cache.
 *
 * Implement the LRUCache class:
 * - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * - int get(int key) Return the value of the key if the key exists, otherwise return -1.
 * - void put(int key, int value) Update the value of the key if the key exists.
 *   Otherwise, add the key-value pair to the cache. If the number of keys
 *   exceeds the capacity from this operation, evict the least recently used key.
 *
 * The functions get and put must each run in O(1) average time complexity.
 */

class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map(); // key -> node
    // Sentinel nodes
    this.head = { key: 0, val: 0, prev: null, next: null };
    this.tail = { key: 0, val: 0, prev: null, next: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _insertBefore(target, node) {
    node.prev = target.prev;
    node.next = target;
    target.prev.next = node;
    target.prev = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._insertBefore(this.tail, node); // move to most recent
    return node.val;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = value;
      this._remove(node);
      this._insertBefore(this.tail, node);
    } else {
      if (this.map.size === this.cap) {
        // Evict LRU (right after head)
        const lru = this.head.next;
        this._remove(lru);
        this.map.delete(lru.key);
      }
      const node = { key, val: value, prev: null, next: null };
      this._insertBefore(this.tail, node);
      this.map.set(key, node);
    }
  }
}

// Not quite fast enough for LeetCode
// /**
//  * @param {number} capacity
//  */
// function LRUCache(capacity) {
//   this.capacity = capacity;
//   this.items = [];
//   this.counter = 0;
// }

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   const itemIndex = this.items.findIndex((item) => item.key === key);

//   if (itemIndex === -1) return -1;

//   const item = this.items[itemIndex];
//   this.items[itemIndex] = { ...item, timestamp: this.counter };

//   this.counter++;

//   return item.value;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.get(key) !== -1) {
//     this.counter++;
//     const itemIndex = this.items.findIndex((item) => item.key === key);
//     const item = this.items[itemIndex];
//     this.items[itemIndex] = { ...item, value, timestamp: this.counter };
//     return;
//   }

//   if (this.items.length === this.capacity) {
//     const earliestTouchedItemIndex = this.items.reduce(
//       (earliestIndex, currentItem, currentIndex, allItems) =>
//         currentItem.timestamp < allItems[earliestIndex].timestamp
//           ? currentIndex
//           : earliestIndex,
//       0,
//     );

//     this.items.splice(earliestTouchedItemIndex, 1);
//   }
//   this.items.push({ key, value, timestamp: this.counter });

//   this.counter++;
// };

module.exports = { LRUCache };
