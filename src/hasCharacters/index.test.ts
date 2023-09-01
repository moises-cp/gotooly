import { hasCharacters } from './index';

describe('hasCharacters', () => {
  test('true on one character', () => {
    expect(hasCharacters('h')).toBe(true);
  });

  test('true on more than one word', () => {
    expect(hasCharacters('orange blue red')).toBe(true);
  });

  test('false on space character', () => {
    expect(hasCharacters(' ')).toBe(false);
  });

  test('false on number', () => {
    expect(hasCharacters(57)).toBe(false);
  });

  test('false on array', () => {
    expect(hasCharacters(['tree'])).toBe(false);
  });

  test('false on object literal', () => {
    expect(hasCharacters({ color: 'blue' })).toBe(false);
  });
});
