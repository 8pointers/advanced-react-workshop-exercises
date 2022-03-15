import motd from './jest-7';

describe('Test doubles - stubs', () => {
  const getRandomMessage = motd(['first', 'second', 'third']);
  let realRandom;
  beforeAll(() => (realRandom = Math.random));
  afterAll(() => (Math.random = realRandom));
  test('should get own IP address 1', () => {
    Math.random = () => 0;
    expect(getRandomMessage()).toBe('first');
  });
});
