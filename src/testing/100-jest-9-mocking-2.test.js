import loginFactory from './100-jest-9-mocking-2';

describe('Test doubles - mocks', () => {
  const logger = { log: jest.fn() };
  const storage = { setItem: jest.fn() };
  const login = loginFactory(logger, storage);
  afterEach(() => jest.resetAllMocks());
  test('login request should be logged in to console', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(logger.log).toHaveBeenCalledWith('Login', 'unicorn', '********', true);
  });
  test('login request should be logged in to console 1', () => {
    login('unicorn', 'pa55w0rd', true);
    expect(storage.setItem).toHaveBeenCalledWith('username', 'unicorn');
  });
  test('login request should be logged in to console 2', () => {
    login('unicorn', 'pa55w0rd', false);
    expect(storage.setItem).not.toHaveBeenCalled();
  });
});
