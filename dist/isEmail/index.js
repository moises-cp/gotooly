"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexTest_1 = require("../regexTest");
const pattern = {
    default: /^.+@.+\..+$/,
};
/**
 * Determine whether or not the given value is an email address based on a generic pattern.
 */
exports.default = (val) => {
    const config = { trim: true };
    return (0, regexTest_1.default)(val, pattern.default, config);
};
//# sourceMappingURL=index.js.map