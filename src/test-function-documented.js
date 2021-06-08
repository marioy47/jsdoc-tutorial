// src/test-function-documented.js

/**
 * This function IS documented
 *
 * @param {String} first The first name
 * @param {String} last The last name
 * @param {Object} [params] Additoinal parammeters
 * @param {Number} [params.age] Optional age
 * @param {String} [params.city] Optional city
 *
 * @return {Boolean} Always true
 */
const testFunctionDocumented = (first, last, params = {}) => {
  const { age = 22, city = "Medellín" } = params;

  console.log(`The name is ${first} ${last}`);
  console.log(`The age is ${age} and the city ${city}`);

  return true;
};

export default testFunctionDocumented;
