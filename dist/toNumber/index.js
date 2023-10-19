"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultReturn_1 = require("../DefaultReturn");
/**
 *
 *
 * @param {string | number} chars
 * @return DefaultReturn
 */
exports.default = (chars) => {
    const result = new DefaultReturn_1.default();
    if (typeof chars === 'string') {
        const isStringNumber = /^[0-9]+$/.test(chars);
        result.data = isStringNumber ? +chars : null;
        result.hasError = !isStringNumber;
        result.message = !isStringNumber ? 'Invalid characters' : '';
        return result.return;
    }
    if (typeof chars === 'number') {
        result.data = chars;
        result.hasError = false;
        return result.return;
    }
    result.message = 'Invalid data type';
    return result.return;
};
//# sourceMappingURL=index.js.map