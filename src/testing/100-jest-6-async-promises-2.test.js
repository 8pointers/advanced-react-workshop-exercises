const aBuggyFunction = (x) => (x >= 0 ? Promise.resolve(x) : Promise.reject('a buggy branch'));

describe('Async tests', () => {
  it('gotcha - should fail but it does not', () =>
    aBuggyFunction(-1).then(
      (result) => expect(result).toBe(-1),
      (reason) => console.log(reason)
    ));
});
