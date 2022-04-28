import motd from './100-jest-7-random';

describe('Test doubles - stubs', () => {
  const getRandomMessage = motd(['first', 'second', 'third']);
  test('should get own IP address 1', () => {
    const realRandom = Math.random;
    Math.random = () => 0;
    expect(getRandomMessage()).toBe('first');
    Math.random = realRandom;
  });
  test('should get own IP address', () => {
    const spy = jest.spyOn(Math, 'random').mockReturnValueOnce(0.4);
    expect(getRandomMessage()).toBe('second');
    spy.mockRestore();
  });
});
