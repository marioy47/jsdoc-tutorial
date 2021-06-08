// src/register-user.js

/**
 * Should we return true or an Exception?
 *
 * @type {Boolean}
 */
const successValue = true;

/**
 * Possible profiles a user can have
 *
 * @type {Array<string>}
 */
const profiles = [];

// Adding profiles to the empty array.
profiles.push("student");
profiles.push("teacher");
profiles.push("advisor");

/**
 * Additional options for registering a user
 *
 * @typedef {Object} UserOpts
 * @property {String} major The major of the user
 * @property {String} profile On of `student`, `teacher`, `consultant`.
 * @property {Boolean} [withMajor=true] `true` if the user has a major.
 */

/**
 * Mock of a user registration
 *
 * @param {String} name The name of the user
 * @param {Number} age Age of the user in years
 * @param {UserOpts} opts Additional parammeters
 * @return {Boolean} `true` if the user was registered
 * @throws {Error} If there was an unknown error
 * @throws {WrongProfileError} If the profile in opts is not avalable
 */
function registerUserOpts(name, age, opts = {}) {
  const { major = "Electric", profile = "student", withMajor = true } = opts;

  if (!profiles.includes(profile)) {
    throw new WrongProfileError(`The profile ${profile} is not permited`);
  }

  if (!successValue) {
    throw new Error("Default wrong error");
  }

  console.log(`The user ${name} of age ${age} was registered`);

  if (withMajor) {
    console.log(`Updating user's major whith ${major}`);
  }

  return successValue;
}

/**
 * Exception raised on the registerUserOpts function when the a wrong
 * profile is passed in the `opts` parammeter
 */
class WrongProfileError extends Error {
  /**
   * @param {String} message The message assigned by the developer
   */
  constructor(message) {
    super(message);
    this.name = "WrongProfileError";
  }
}

module.exports = {
  registerUserOpts,
  WrongProfileError,
};
