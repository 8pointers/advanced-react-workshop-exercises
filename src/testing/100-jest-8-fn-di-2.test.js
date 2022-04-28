import motd from './100-jest-8-fn-di-2';

describe('Test doubles - stubs', () => {
  test('should get own IP address 1', () => {
    const stubRandom = jest.fn();
    const getRandomMessage = motd(stubRandom)(['first', 'second', 'third']);
    stubRandom.mockReturnValue(0);
    expect(getRandomMessage()).toBe('first');
    stubRandom.mockReturnValue(1);
    expect(getRandomMessage()).toBe('second');
  });
});
