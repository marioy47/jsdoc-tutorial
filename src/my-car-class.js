/**
 * A class representing a car
 *
 * @property {String} brand - The cars brand
 * @property {Number} model - The cars model
 * @property {String[]} colors - The available colors
 * @example <caption>Creating a car</caption>
 * const myCar = new MyCarClass();
 * myCar.colors
 * @tutorial my-car-class
 *
 */
class MyCarClass {
  /** @constructor */
  constructor() {
    this.brand = "Mustang";
    this.model = 1965;
    this.colors = ["Red", "Black", "White"];
  }
}

const a = new MyCarClass();
