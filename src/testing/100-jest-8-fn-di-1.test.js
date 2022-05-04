import motd from './100-jest-8-fn-di-1';

describe('Test doubles - stubs & DI', () => {
  it('should pick second message when random number is in [1/3, 2/3)', () => {
    const stubRandom = jest.fn();
    const getRandomMessage = motd(stubRandom)(['first', 'second', 'third']);
    stubRandom.mockReturnValue(0.33333);
    expect(getRandomMessage()).toBe('first');
    stubRandom.mockReturnValue(0.33334);
    expect(getRandomMessage()).toBe('second');
  });
});
