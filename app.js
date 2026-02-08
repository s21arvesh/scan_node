Modify app.js
/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b
}

/**
 * Dangerous function
 * @param {string} input
 */
function risky(input) {
  eval(input)
}

module.exports = { add, risky }
