const aBuggyFunction = (x) => (x >= 0 ? Promise.resolve(x) : Promise.reject('a buggy branch'));

describe('Async tests', () => {
  test('should not pass', () =>
    aBuggyFunction(-1).then(
      (result) => expect(result).toBe(-1),
      (reason) => console.log(reason)
    ));
});
