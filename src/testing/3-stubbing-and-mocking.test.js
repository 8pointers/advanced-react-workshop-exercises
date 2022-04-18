import fetchMock from 'jest-fetch-mock';
import fetchIp from './3-stubbing-and-mocking';

it('should make the HTTP request and extract the IP address from it', async () => {
  fetchMock.resetMocks();
  fetch.mockResponseOnce(JSON.stringify({ ip: '1.2.3.4' }));

  expect(await fetchIp()).toBe('1.2.3.4');

  expect(fetch.mock.calls.length).toBe(1);
  expect(fetch.mock.calls[0][0]).toBe('/api/ipify?format=json');
});
