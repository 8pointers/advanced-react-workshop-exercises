import delay from './100-jest-11-time-1';

describe('Async tests - time', () => {
  it('should resolve after 4.9 seconds', async () => expect(await delay(4900)).toBe(undefined));
});
