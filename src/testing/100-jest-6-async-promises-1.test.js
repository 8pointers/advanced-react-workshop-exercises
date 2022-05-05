import getOwnIPAddress from './100-jest-6-async-promises';

const expectedIPAddress = '212.187.203.82';

describe('Async tests - promises', () => {
  it('should get own IP address - done', (done) => {
    getOwnIPAddress().then(
      (ipAddress) => {
        expect(ipAddress).toBe(expectedIPAddress);
        done();
      },
      (reason) => done.fail(reason)
    );
  });
  it('should get own IP address - returning a promise', () =>
    getOwnIPAddress().then((ipAddress) => expect(ipAddress).toBe(expectedIPAddress)));
  it('should get own IP address - returning a promise + resolves', () =>
    expect(getOwnIPAddress()).resolves.toBe(expectedIPAddress));
  it('should get own IP address - async/await', async () =>
    expect(await getOwnIPAddress()).toBe(expectedIPAddress));
});
