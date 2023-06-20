"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasKey = void 0;
/**
 * Returns a boolean indicating whether or nor the parameter is an object with keys/methods.
 *
 * @param obj
 * @returns A boolean.
 */
const hasKey = (obj) => Boolean(obj &&
    !Array.isArray(obj) &&
    typeof obj === 'object' &&
    Object.keys(obj).length);
exports.hasKey = hasKey;
//# sourceMappingURL=index.js.map