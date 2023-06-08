import calculate from '../logic/calculate';

describe('to test calculate logic', () => {
  test('calculate logic', () => {
    expect(calculate({}, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
  test('calculate logic', () => {
    expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).toEqual({ total: '3', next: null, operation: null });
  });
  test('should update the next value when the "." button is pressed', () => {
    expect(calculate({ total: '8', next: '5', operation: '+' }, '.')).toEqual({
      total: '8',
      next: '5.',
      operation: '+',
    });
  });
  test('update the operation when an operation button is pressed', () => {
    expect(calculate({ total: '10', next: '2', operation: '+' }, '-')).toEqual({
      total: '12',
      next: null,
      operation: '-',
    });
  });
  test('update the next value when a number button is pressed', () => {
    expect(calculate({ total: '1', next: '4', operation: '+' }, '3')).toEqual({
      total: '1',
      next: '43',
      operation: '+',
    });
  });

  test('handle the case when the user presses 0 after 0 is already the next value', () => {
    expect(calculate({ total: '5', next: '0', operation: '+' }, '0')).toEqual(
      {},
    );
  });

  it('check if all the function buttons are working or not', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '-')).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
    expect(calculate({ total: '10', next: '5', operation: '+' }, 'x')).toEqual({
      total: '15',
      next: null,
      operation: 'x',
    });
    expect(calculate({ total: '10', next: '5', operation: '+' }, '÷')).toEqual({
      total: '15',
      next: null,
      operation: '÷',
    });
    expect(calculate({ total: '10', next: '5', operation: '+' }, '%')).toEqual({
      total: '15',
      next: null,
      operation: '%',
    });
  });
});
