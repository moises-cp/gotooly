/**
 * This is a template to set a default return as an object with two properties
 * data and has error.
 * @param {any} data - Any value.
 * @param {boolean} hasError - A boolean to indicate whether or not there's an error.
 */
class DefaultReturn {
  constructor(data = null, hasError = true, message = '') {
    this.prop = {
      data,
      hasError,
      message,
    };
  }

  /**
   * @param {any} data
   */
  set data(data) {
    this.prop.data = data;
  }

  /**
   * @param {boolean} hasError
   */
  set hasError(hasError) {
    this.prop.hasError = hasError;
  }

  /**
   * @param {string} msg
   */
  set message(msg) {
    this.prop.message = msg;
  }

  /**
   * @return {object}
   */
  get return() {
    return this.prop;
  }
}

export default DefaultReturn;
