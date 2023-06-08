import operate from '../logic/operate';

describe('operate function', () => {
  test('+ operator', () => {
    expect(operate('3', '2', '+')).toBe('5');
  });

  test('- operator', () => {
    expect(operate('3', '2', '-')).toBe('1');
  });

  test('x operator', () => {
    expect(operate('3', '2', 'x')).toBe('6');
  });

  describe('÷ operator', () => {
    test('numbers devide', () => {
      expect(operate('4', '2', '÷')).toBe('2');
    });
    test('divide by 0', () => {
      expect(operate('4', '0', '÷')).toBe("Can't divide by 0.");
    });
  });

  describe('% operator', () => {
    test('numbers', () => {
      expect(operate('3', '2', '%')).toBe('1');
    });
    test('divide by 0', () => {
      expect(operate('3', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
    });
  });
});
