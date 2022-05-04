describe('Async tests - motivation', () => {
  it('should fail', () => {
    expect(1).toBe(1);
    setTimeout(() => expect(1).toBe(2), 0);
  });
});
