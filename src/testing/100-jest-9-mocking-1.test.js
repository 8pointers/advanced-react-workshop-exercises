import login from './100-jest-9-mocking-1';

describe('Test doubles - mocks', () => {
  let log, setItem;
  beforeEach(() => {
    log = jest.spyOn(console, 'log');
    setItem = jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem');
  });
  afterEach(() => jest.resetAllMocks());
  it('should log the login request to console 1', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(log).toHaveBeenCalledWith('Login', 'unicorn', '********', true);
  });
  it('should log the login request to console 2', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(setItem).toHaveBeenCalledWith('username', 'unicorn');
  });
  it('should store username in localStorage when rememberMe is true', () => {
    login('unicorn', 'pa55w0rd', false);
    expect(setItem).not.toHaveBeenCalled();
  });
});
