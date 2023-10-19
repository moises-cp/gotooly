/**
 * This is a template to set a default return as an object with two properties
 * data and has error.
 * @param {any} data - Any value.
 * @param {boolean} hasError - A boolean to indicate whether or not there's an error.
 */
class DefaultReturn {
  prop: {
    data: any;
    hasError: boolean;
    message: string;
  };

  constructor(data = null, hasError = true, message = '') {
    this.prop = {
      data,
      hasError,
      message,
    };
  }

  set data(data: any) {
    this.prop.data = data;
  }

  set hasError(hasError: boolean) {
    this.prop.hasError = hasError;
  }

  set message(msg: string) {
    this.prop.message = msg;
  }

  get return(): typeof this.prop {
    return this.prop;
  }
}

export default DefaultReturn;
