import login from './100-jest-9-mocking';

describe('Test doubles - mocks', () => {
  let log, setItem;
  beforeEach(() => {
    log = jest.spyOn(console, 'log');
    setItem = jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem');
  });
  afterEach(() => jest.resetAllMocks());
  test('login request should be logged in to console', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(log).toHaveBeenCalledWith('Login', 'unicorn', '********', true);
  });
  test('login request should be logged in to console 1', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(setItem).toHaveBeenCalledWith('username', 'unicorn');
  });
  test('login request should be logged in to console 2', () => {
    login('unicorn', 'pa55w0rd', false);
    expect(setItem).not.toHaveBeenCalled();
  });
});
