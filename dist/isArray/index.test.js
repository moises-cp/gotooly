"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const func = () => console.log('callback function');
describe('isArray', () => {
    test('return false on number', () => {
        expect((0, index_1.isArray)(2514)).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.isArray)(true)).toBe(false);
    });
    test('return false on callback function', () => {
        expect((0, index_1.isArray)(func)).toBe(false);
    });
    test('return false on undefined', () => {
        expect((0, index_1.isArray)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        expect((0, index_1.isArray)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.isArray)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.isArray)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on string', () => {
        expect((0, index_1.isArray)('orange')).toBe(false);
    });
    test('return false on objects with property', () => {
        expect((0, index_1.isArray)({ fruit: ['orange'] })).toBe(false);
    });
    test('return false on empty object', () => {
        expect((0, index_1.isArray)({})).toBe(false);
    });
    test('return false on map objects', () => {
        const mapObj = new Map();
        mapObj.set('fruit', 'orange');
        expect((0, index_1.isArray)(mapObj)).toBe(false);
    });
    test('return false on set objects', () => {
        const setObj = new Set();
        setObj.add('fruit');
        expect((0, index_1.isArray)(setObj)).toBe(false);
    });
    test('return true on array with items', () => {
        expect((0, index_1.isArray)(['apple', 'orange'])).toBe(true);
    });
    test('return true on empty array', () => {
        expect((0, index_1.isArray)([])).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map