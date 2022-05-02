import getOwnIPAddress from './100-jest-6-async-promises';

const expectedIPAddress = '81.133.168.3';

describe('Async tests - done', () => {
  test('should get own IP address 1', (done) => {
    getOwnIPAddress().then(
      (ipAddress) => {
        expect(ipAddress).toBe(expectedIPAddress);
        done();
      },
      (reason) => done.fail(reason)
    );
  });
  test('should get own IP address 2', () =>
    getOwnIPAddress().then((ipAddress) => expect(ipAddress).toBe(expectedIPAddress)));
  test('should get own IP address 3', () =>
    expect(getOwnIPAddress()).resolves.toBe(expectedIPAddress));
  test('should get own IP address 4', async () =>
    expect(await getOwnIPAddress()).toBe(expectedIPAddress));
});
