import motd from './jest-8';

describe('Test doubles - stubs', () => {
  let stubRandom, getRandomMessage;
  beforeEach(() => {
    stubRandom = jest.fn();
    getRandomMessage = motd(['first', 'second', 'third'], stubRandom);
  });
  test('should get own IP address 1', () => {
    stubRandom.mockReturnValue(0.33333);
    expect(getRandomMessage()).toBe('first');
    stubRandom.mockReturnValue(0.33334);
    expect(getRandomMessage()).toBe('second');
  });
});
