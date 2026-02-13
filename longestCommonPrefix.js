function longestCommonPrefix(strings) {
  const longestPrefix = [];
  let hasDifferentPrefix = false;
  let index = 0;

  while (!hasDifferentPrefix) {
    let currentChar = "";
    let charsAreTheSame = true;

    strings.forEach((string, stringIndex) => {
      if (stringIndex === 0) {
        const char = string.charAt(index);

        if (char === "") {
          charsAreTheSame = false;
          hasDifferentPrefix = true;
        } else {
          currentChar = char;
        }
      } else {
        const char = string.charAt(index);
        if (char !== currentChar) {
          charsAreTheSame = false;
          hasDifferentPrefix = true;
        }
      }
    });

    if (charsAreTheSame) {
      longestPrefix.push(currentChar);
    }

    index++;
  }

  return longestPrefix.join("");
}

module.exports = longestCommonPrefix;
