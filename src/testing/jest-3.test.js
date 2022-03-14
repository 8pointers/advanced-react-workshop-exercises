describe('Other Jest matchers', () => {
  it('should know common jest matchers', () => {
    expect(0.1 + 0.2).not.toBe(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16);
    expect(null).toBeDefined();
    expect(undefined).not.toBeDefined();
    expect(null).toBeNull();
    expect([1, 2, 3][3]).toBeFalsy();
    expect([1, 2, 3][2]).toBeTruthy();
    expect(1 - Math.random()).toBeGreaterThan(0);
    expect(Math.random()).toBeGreaterThanOrEqual(0);
    expect(Math.random()).toBeLessThan(1);
    expect(1 - Math.random()).toBeLessThanOrEqual(1);
    expect([]).toBeInstanceOf(Array);
    expect([1, 2, 3]).toContain(2);
    expect(() => ['first', 'second', 'third'][3].length).toThrow();
    expect(() => ['first', 'second', 'third'][3].length).toThrowError(
      new Error(`Cannot read properties of undefined (reading 'length')`)
    );
  });
});
