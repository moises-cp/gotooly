"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const func = () => console.log('callback function');
describe('isMapObject', () => {
    test('return false on number', () => {
        expect((0, index_1.isMapObject)(2514)).toBe(false);
    });
    test('return false on array', () => {
        expect((0, index_1.isMapObject)(['apple', 'orange'])).toBe(false);
    });
    test('return false on boolean', () => {
        expect((0, index_1.isMapObject)(true)).toBe(false);
    });
    test('return false on callback function', () => {
        expect((0, index_1.isMapObject)(func)).toBe(false);
    });
    test('return false on undefined', () => {
        expect((0, index_1.isMapObject)(undefined)).toBe(false);
    });
    test('return false on null', () => {
        expect((0, index_1.isMapObject)(null)).toBe(false);
    });
    test('return false on Symbol', () => {
        expect((0, index_1.isMapObject)(Symbol('foo'))).toBe(false);
    });
    test('return false on BigInt', () => {
        expect((0, index_1.isMapObject)(BigInt(9007199254740991))).toBe(false);
    });
    test('return false on string', () => {
        expect((0, index_1.isMapObject)('orange')).toBe(false);
    });
    test('return false on regex', () => {
        expect((0, index_1.isMapObject)(/(\w+)\s(\w+)/)).toBe(false);
    });
    test('return false on set objects', () => {
        const setObj = new Set();
        setObj.add('fruit');
        expect((0, index_1.isMapObject)(setObj)).toBe(false);
    });
    test('return false on WeakSet objects', () => {
        const weakSetObj = new WeakSet();
        weakSetObj.add({});
        expect((0, index_1.isMapObject)(weakSetObj)).toBe(false);
    });
    test('return false on WeakMap objects', () => {
        const weakMapObj = new WeakMap();
        weakMapObj.set({}, 37);
        expect((0, index_1.isMapObject)(weakMapObj)).toBe(false);
    });
    test('return false on Date object', () => {
        const dateObj = new Date('December 17, 1995 03:24:00');
        expect((0, index_1.isMapObject)(dateObj)).toBe(false);
    });
    test('return false on Error object', () => {
        const errorObj = new Error("Whoops!");
        expect((0, index_1.isMapObject)(errorObj)).toBe(false);
    });
    test('return false on object literal with property', () => {
        expect((0, index_1.isMapObject)({ fruit: ['orange'] })).toBe(false);
    });
    test('return false on empty object literal', () => {
        expect((0, index_1.isMapObject)({})).toBe(false);
    });
    test('return true on map objects', () => {
        const mapObj = new Map();
        mapObj.set('fruit', 'orange');
        expect((0, index_1.isMapObject)(mapObj)).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map