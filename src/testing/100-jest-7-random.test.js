import motd from './100-jest-7-random';

describe('Test doubles - stubs', () => {
  const getRandomMessage = motd(['first', 'second', 'third']);
  it('should pick second message when random number is in [1/3, 2/3) - monkey patching', () => {
    const realRandom = Math.random;
    Math.random = () => 0.334;
    expect(getRandomMessage()).toBe('second');
    Math.random = realRandom;
  });
  it('should pick second message when random number is in [1/3, 2/3) - spyOn', () => {
    const spy = jest.spyOn(Math, 'random').mockReturnValueOnce(0.334);
    expect(getRandomMessage()).toBe('second');
    spy.mockRestore();
  });
});
