"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pattern = /^.+@.+\..+$/;
exports.default = (email) => Boolean(typeof email === 'string' && pattern.test(email));
//# sourceMappingURL=index.js.map