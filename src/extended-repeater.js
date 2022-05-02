const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let pattern = str
  if (options.addition != undefined) {
    const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|'
    const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1
    pattern += Array(additionRepeatTimes).fill(options.addition).join(additionSeparator)
  }
  const separator = options.separator !== undefined ? options.separator : '+'
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1
  const result = Array(repeatTimes).fill(pattern).join(separator)
  return result
}

module.exports = {
  repeater
};
