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
  if (!arr.length) return true
  if (arr.length % 2 !== 0) return false

  let hasFoundCloser = false

  const initialChar = arr[0]

  if (invalidInitials.includes(initialChar)) {
    return false
  }

  let initialsFound = 1

  for (let i =  1; i <= arr.length; i++) {
    if (arr[i] === initialChar) {
      initialsFound++
    }

    if (arr[i] === closers[initialChar]) {
      if (initialsFound === 1) {
        hasFoundCloser = true
        const arr1 = arr.slice(1,i)
        const arr2 = arr.slice(i+1)
        if (!isArrayValid(arr1)) return false
        if (!isArrayValid(arr2)) return false
        break;
      } else {
        initialsFound--
      }
    }
  }

  return hasFoundCloser
}

module.exports = validParentheses
