"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    set data(data) {
        this.prop.data = data;
    }
    set hasError(hasError) {
        this.prop.hasError = hasError;
    }
    set message(msg) {
        this.prop.message = msg;
    }
    get return() {
        return this.prop;
    }
}
exports.default = DefaultReturn;
//# sourceMappingURL=index.js.map