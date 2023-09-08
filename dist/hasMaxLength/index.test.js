"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('hasLength', () => {
    test('false when characters length is 2 and it is suppose to be 0', () => {
        expect((0, _1.default)('he', 0)).toBe(false);
    });
    test('false when the characters length is 2 but it is suppose to be 1', () => {
        expect((0, _1.default)('he', 1)).toBe(false);
    });
    test('true on when characters length matches the maximum number', () => {
        expect((0, _1.default)('he', 2)).toBe(true);
    });
    test('true the when characters length is 2 and its maximum is 3', () => {
        expect((0, _1.default)('he', 3)).toBe(true);
    });
    test('true the when characters length is 2 and its maximum is 4', () => {
        expect((0, _1.default)('he', 4)).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map