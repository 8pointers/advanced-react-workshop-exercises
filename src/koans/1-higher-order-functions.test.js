const __ = 'replace me so that the test is passing';

describe('Higher-order functions', () => {
  it('1', () => {
    const add = (a) => (b) => a + b;
    expect(add(1)(2)).toBe(__);
    const mystery = add(1);
    expect(mystery(2)).toBe(__);
  });
});
