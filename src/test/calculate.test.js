import calculate from '../logic/calculate';

describe('to test calculate logic', () => {
  test('calculate logic', () => {
    expect(calculate({}, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
  test('calculate logic', () => {
    expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).toEqual({ total: '3', next: null, operation: null });
  });
});
