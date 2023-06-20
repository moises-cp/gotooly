"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectWithItems = void 0;
const isObjectWithItems = (obj) => Boolean(obj &&
    !Array.isArray(obj) &&
    typeof obj === 'object' &&
    Object.keys(obj).length);
exports.isObjectWithItems = isObjectWithItems;
//# sourceMappingURL=index.js.map