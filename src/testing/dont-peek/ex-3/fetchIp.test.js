import fetchIpFactory from './fetchIp';

it('should make the HTTP request and extract the IP address from it', async () => {
  const fetchJson = jest.fn();
  const fetchIp = fetchIpFactory(fetchJson);
  fetchJson.mockReturnValue(Promise.resolve({ ip: '1.2.3.4' }));

  expect(await fetchIp()).toBe('1.2.3.4');
  expect(fetchJson.mock.calls.length).toBe(1);
  expect(fetchJson.mock.calls[0][0]).toBe('/api/ipify?format=json');
});
