// https://leetcode.com/problems/valid-parentheses/submissions/

const invalidInitials = [')', ']', '}']

const closers = {
  '(': ')',
  '[': ']',
  '{': '}'
}

function validParentheses(str) {
  const arr = str.split('')

  return isArrayValid(arr)
}

function isArrayValid(arr) {
  debugger
  if (!arr.length) return true
  if (arr.length % 2 !== 0) return false

  let hasFoundCloser = false

  const initialChar = arr[0]

  if (invalidInitials.includes(initialChar)) {
    return false
  }

  if (arr[1] === closers[initialChar]) {
    hasFoundCloser = true
    const clippedArray = arr.slice(2)
    if (!isArrayValid(clippedArray)) return false
  } else {
    // Instead of looping backwards, we have to
    // 1. Loop forward
    // 2. Count other openings of the same opener
    // 3. Count closings too
    // 4. Once we get to the same number of closers as we had openers, that's the index to slice the array.
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === closers[initialChar]) {
        hasFoundCloser = true
        const arr1 = arr.slice(1,i)
        const arr2 = arr.slice(i+1)
        if (!isArrayValid(arr1)) return false
        if (!isArrayValid(arr2)) return false
        break;
      }
    }
  }

  return hasFoundCloser
}

module.exports = validParentheses
