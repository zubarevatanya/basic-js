const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n + ''
  const numbers = str.split('')
    .map((d, index) => {
console.log("Index "+index+" d="+d+" S1="+str.substring(0, index)+" S2="+((index < str.length - 1) ? str.substring(index + 1) : ""))
      return str.substring(0, index) + ((index < str.length - 1) ? str.substring(index + 1) : "")
    })
    .map(s => parseInt(s))
  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
