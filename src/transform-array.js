const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    return "'arr' parameter must be an instance of the Array!"
  }

  let i = 0;
  let result = []
  while (i < arr.length) {
    let value = arr[i]
    if (value instanceof Number) {
      result.push(value)
    }
    if (value === '--discard-next') {
      i++
    }
    if (value === '--discard-prev') {
      result.pop()
    }
    if (value === '--double-next') {
      result.push(arr[i + 1])
    }
    if (value === '--double-prev') {
      result.push(arr[i - 1])
    }
    i++
  }
  return result
}

module.exports = {
  transform
};
