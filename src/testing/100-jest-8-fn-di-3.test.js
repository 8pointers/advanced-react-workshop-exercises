import motd from './100-jest-8-fn-di-2';

describe('Test doubles - stubs', () => {
  test('should get own IP address 1', () => {
    const mockRng = jest.fn();
    const getRandomMessage = motd(mockRng)(['first', 'second', 'third']);
    getRandomMessage();
    expect(mockRng).toHaveBeenCalledTimes(1);
    expect(mockRng).toHaveBeenCalledWith(0, 3);
  });
});
