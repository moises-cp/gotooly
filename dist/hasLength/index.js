"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine whether or not a given string has any characters or a given array has any items.
 */
exports.default = (val) => {
    return Boolean((typeof val === 'string' || Array.isArray(val)) && val.length);
};
//# sourceMappingURL=index.js.map