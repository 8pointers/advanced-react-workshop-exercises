describe('Async tests - done', () => {
  it('-should fail', (done) => {
    setTimeout(() => {
      expect(1).toBe(2);
      done();
    }, 0);
  });
  it('-should also fail - default timeout is 5000ms', (done) => {
    setTimeout(() => {
      expect(1).toBe(1);
      done();
    }, 6000);
  });
  it('-should also fail - custom timeout', (done) => {
    setTimeout(() => {
      expect(1).toBe(1);
      done();
    }, 200);
  }, 100);
});
