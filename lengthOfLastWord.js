function lengthOfLastWord(string) {
  const array = string.split("");
  let haveFoundFirstValidChar = false;
  let length = 0;

  for (let index = array.length - 1; index >= 0; index--) {
    const char = array[index];

    if (char === " ") {
      if (haveFoundFirstValidChar) { 
        return length; 
      }
    } else {
      haveFoundFirstValidChar = true;
      length++;
    }
  }

  return length;
}

module.exports = lengthOfLastWord