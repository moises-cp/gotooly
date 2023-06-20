"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('hasLength', () => {
    test('true on string literal with one or more characters', () => {
        expect((0, _1.default)('hello')).toBe(true);
    });
    test('true on array with one or more items', () => {
        expect((0, _1.default)(['apple', 'orange'])).toBe(true);
    });
    test('false on empty array', () => {
        expect((0, _1.default)([])).toBe(false);
    });
    test('false on boolean', () => {
        expect((0, _1.default)(true)).toBe(false);
    });
    test('false on numbers', () => {
        expect((0, _1.default)(50)).toBe(false);
    });
    test('false on object literal with property', () => {
        expect((0, _1.default)({ fruit: 'orange' })).toBe(false);
    });
    test('false on object literal without property', () => {
        expect((0, _1.default)({})).toBe(false);
    });
    test('false on null', () => {
        expect((0, _1.default)(null)).toBe(false);
    });
    test('false on undefined', () => {
        expect((0, _1.default)(undefined)).toBe(false);
    });
});
//# sourceMappingURL=index.test.js.map