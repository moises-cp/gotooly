"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
const isObject = (obj) => Boolean(obj && !Array.isArray(obj) && typeof obj === 'object');
exports.isObject = isObject;
//# sourceMappingURL=index.js.map