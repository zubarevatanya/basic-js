const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("")
  let result = ""
  let currentLetter = str[0]
  let currentCount = 1
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === currentLetter&&i<str.length) {
      currentCount++
    } else {
      if (currentCount > 1) {
        result += currentCount + currentLetter
      } else {
        result += currentLetter
      }
      currentLetter = str[i]
      currentCount = 1
    }
  }
  return result
}

module.exports = {
  encodeLine
};
