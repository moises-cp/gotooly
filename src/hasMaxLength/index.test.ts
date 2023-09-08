import hasMaxLength from '.';

describe('hasLength', () => {
  test('false when characters length is 2 and it is suppose to be 0', () => {
    expect(hasMaxLength('he', 0)).toBe(false);
  });

  test('false when the characters length is 2 but it is suppose to be 1', () => {
    expect(hasMaxLength('he', 1)).toBe(false);
  });

  test('true on when characters length matches the maximum number', () => {
    expect(hasMaxLength('he', 2)).toBe(true);
  });

  test('true the when characters length is 2 and its maximum is 3', () => {
    expect(hasMaxLength('he', 3)).toBe(true);
  });

  test('true the when characters length is 2 and its maximum is 4', () => {
    expect(hasMaxLength('he', 4)).toBe(true);
  });
});
