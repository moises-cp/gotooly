"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (str, maxLength) => {
    if (typeof str !== 'string' || typeof maxLength !== 'number') {
        return {
            message: 'the data type of the first parameter needs to be a string and a number for the second one.',
        };
    }
    return Boolean(str.trim().length <= maxLength);
};
//# sourceMappingURL=index.js.map