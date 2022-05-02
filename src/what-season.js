const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (typeof date.getMonth !== 'function') {
    throw new Error("Invalid date!")
  }

  try {
    let month = date.getMonth()
    if (month > 1 && month <= 4) return 'spring';
    if (month > 4 && month <= 7) return 'summer';
    if (month > 7 && month <= 10) return 'fall';
    if (month > 10 || month <= 1) return 'winter';
  } catch (e) {
    throw new Error("Invalid date!")
  }
}

module.exports = {
  getSeason
};
