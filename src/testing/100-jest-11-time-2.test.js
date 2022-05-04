import delay from './100-jest-11-time-1';

describe('Async tests - faking time', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());
  it('should resolve after 4.9 seconds', async () => {
    const callback = jest.fn();
    const result = delay(4900)
      .then(() => 'result')
      .then(callback);
    jest.advanceTimersByTime(4899);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(2);
    await result;
    expect(callback).toHaveBeenCalledWith('result');
  });
});
