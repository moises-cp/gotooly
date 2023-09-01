"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param val A string or array
 * @param maxLength A number to represent the maximum characters allowed within a string or the maximum number elements in a array.
 */
exports.default = (val, maxLength) => {
    if ((typeof val !== 'string' && !Array.isArray(val)) ||
        typeof maxLength !== 'number') {
        return null;
    }
    return val.slice(0, maxLength);
};
//# sourceMappingURL=index.js.map