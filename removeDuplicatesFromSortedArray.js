// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicatesFromSortedArray(arr) {
  const {length} = arr.reduce(({length, currentItem}, item) => {
    if (item !== currentItem) {
      length = length + 1
      currentItem = item
    }

    return {length, currentItem}
  }, {
    length: 0,
    currentItem: undefined
  })

  return length
}

module.exports = removeDuplicatesFromSortedArray
