describe('Async tests - done', () => {
  test('should fail', (done) => {
    setTimeout(() => {
      expect(1).toBe(2);
      done();
    }, 0);
  });
});
