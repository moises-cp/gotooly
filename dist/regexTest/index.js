"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine whether or not a string match the regular expression pattern.
 *
 * @param str string
 * @param pattern RegExp
 * @return A boolean
 */
exports.default = (str, pattern, config) => {
    if (typeof str !== 'string')
        return false;
    const val = config && config.trim ? str.trim() : str;
    return pattern.test(val);
};
//# sourceMappingURL=index.js.map