// src/test-function.js

const testFunction = (first, last, params = {}) => {
  const { age = 22, city = 'Medellín' } = params

  console.log(`The name is ${first} ${last}`)
  console.log(`The age is ${age} and the city ${city}`)
}

export default testFunction
