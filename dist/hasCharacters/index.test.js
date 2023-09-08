"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('hasCharacters', () => {
    test('true on one character', () => {
        expect((0, index_1.default)('h')).toBe(true);
    });
    test('true on more than one word', () => {
        expect((0, index_1.default)('orange blue red')).toBe(true);
    });
    test('false on space character', () => {
        expect((0, index_1.default)(' ')).toBe(false);
    });
    test('false on number', () => {
        expect((0, index_1.default)(57)).toBe(false);
    });
    test('false on array', () => {
        expect((0, index_1.default)(['tree'])).toBe(false);
    });
    test('false on object literal', () => {
        expect((0, index_1.default)({ color: 'blue' })).toBe(false);
    });
});
//# sourceMappingURL=index.test.js.map