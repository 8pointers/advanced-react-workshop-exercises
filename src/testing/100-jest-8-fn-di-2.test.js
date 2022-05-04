import motd from './100-jest-8-fn-di-2';

describe('Test doubles - stubs & DI + better API', () => {
  it('should pick second message when random number is in [1/3, 2/3)', () => {
    const stubRandom = jest.fn();
    const getRandomMessage = motd(stubRandom)(['first', 'second', 'third']);
    stubRandom.mockReturnValue(0);
    expect(getRandomMessage()).toBe('first');
    stubRandom.mockReturnValue(1);
    expect(getRandomMessage()).toBe('second');
  });
});
