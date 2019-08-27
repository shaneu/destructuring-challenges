/**
 * @param {Object} obj
 * @returns {string}
 * @summary `given the input { a: "the value of key a", b: "the value of key b" } destructure the value of the key b from the object.
 */
const test1 = obj => {
  const {b} = obj;
  return b;
};

/**
 * @param {Object} obj
 * @returns {string}
 * @summary `given the input
 *      {
 *        commit: { revision: "7947babee5f624bd0c64c8c7de4a81dd09a94be8", username: "nina@hotmail.com" }
 *      }
 * return the user name.`
 */
const test2 = obj => {
  // TODO: implement
  return;
};

/**
 * @param {Object} obj
 * @returns {string}
 * @summary `given the input
 *      {
 *        commit: { revision: "7947babee5f624bd0c64c8c7de4a81dd09a94be8", username: "nina@hotmail.com" }
 *      }
 * return the user name.`
 */
const test3 = obj => {

  // Don't change, return email via destructing the input obj
  return email;
};

/**
 * Return engagementStatus
 * @param {Object} obj
 * @returns {boolean}
 */
const test4 = obj => {

  return;
};

/**
 * Return wedding plans
 * @param {Object} obj
 * @returns {Object}
 */
const test5 = obj => {

  return;
};

/**
 * Return photographer details.
 * @param {Object} obj
 * @returns {Object}
 */
const test6 = obj => {

  return;
};

/**
 * Return photographer studio.
 * @param {Object} obj
 * @returns {string}
 */
const test7 = obj => {

  return;
};

module.exports = {test1, test2, test3, test4, test5, test6, test7};
