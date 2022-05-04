import loginFactory from './100-jest-9-mocking-2';

describe('Test doubles - mocks & DI', () => {
  const logger = { log: jest.fn() };
  const storage = { setItem: jest.fn() };
  const login = loginFactory(logger, storage);
  afterEach(() => jest.resetAllMocks());
  it('should lot the login request to the console 1', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(logger.log).toHaveBeenCalledWith('Login', 'unicorn', '********', true);
  });
  it('should log the login request to the console 2', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(storage.setItem).toHaveBeenCalledWith('username', 'unicorn');
  });
  it('should store username in localStorage when rememberMe is true', () => {
    login('unicorn', 'pa55w0rd', false);
    expect(storage.setItem).not.toHaveBeenCalled();
  });
});
