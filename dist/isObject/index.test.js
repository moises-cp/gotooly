"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const func = () => console.log('callback function');
describe('isObject', () => {
    test('return false on number', () => {
        expect((0, index_1.isObject)(2514)).toBe(false);
    });
    test('return false on array', () => {
        expect((0, index_1.isObject)(['apple', 'orange'])).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.isObject)(true)).toBe(false);
    });
    test('return false on callback function', () => {
        expect((0, index_1.isObject)(func)).toBe(false);
    });
    test('return false on undefined', () => {
        expect((0, index_1.isObject)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        expect((0, index_1.isObject)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.isObject)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.isObject)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on string', () => {
        expect((0, index_1.isObject)('orange')).toBe(false);
    });
    test('return true on regex', () => {
        expect((0, index_1.isObject)(/(\w+)\s(\w+)/)).toBe(true);
    });
    test('return true on map objects', () => {
        const mapObj = new Map();
        mapObj.set('fruit', 'orange');
        expect((0, index_1.isObject)(mapObj)).toBe(true);
    });
    test('return true on set objects', () => {
        const setObj = new Set();
        setObj.add('fruit');
        expect((0, index_1.isObject)(setObj)).toBe(true);
    });
    test('return true on WeakSet objects', () => {
        const weakSetObj = new WeakSet();
        weakSetObj.add({});
        expect((0, index_1.isObject)(weakSetObj)).toBe(true);
    });
    test('return true on objects with property', () => {
        expect((0, index_1.isObject)({ fruit: ['orange'] })).toBe(true);
    });
    test('return true on empty object', () => {
        expect((0, index_1.isObject)({})).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map