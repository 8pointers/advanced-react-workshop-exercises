import getOwnIPAddress from './jest-6';

const expectedIPAddress = '77.222.27.59';

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
