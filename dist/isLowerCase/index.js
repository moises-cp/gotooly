"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (chars) => {
    if (typeof chars !== 'string')
        return false;
    return /^[a-z]+$/.test(chars);
};
//# sourceMappingURL=index.js.map