import login from './jest-9';

describe('Test doubles - mocks', () => {
  test('login request should be logged in to console', () => {
    const log = jest.spyOn(console, 'log');
    login('unicorn', 'pa55w0rd', true);
    expect(log).toHaveBeenCalledWith('Login', 'unicorn', '********', true);
  });
  test('login request should be logged in to console 1', () => {
    const setItem = jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem');
    login('unicorn', 'pa55w0rd', true);
    expect(setItem).toHaveBeenCalledWith('username', 'unicorn');
  });
  test('login request should be logged in to console 2', () => {
    const setItem = jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem');
    login('unicorn', 'pa55w0rd', false);
    expect(setItem).not.toHaveBeenCalled();
  });
});
