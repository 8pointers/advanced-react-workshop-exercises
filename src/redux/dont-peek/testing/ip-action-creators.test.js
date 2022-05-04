import { requestIpAddress, receiveIpAddress, fetchIpAddress } from './ip-action-creators';

afterEach(fetch.resetMocks);
it('should be able to create an action that signals the ip address is being fetched', () =>
  expect(requestIpAddress()).toEqual({ type: 'REQUEST_IP_ADDRESS' }));

it('should be able to create an action that signals the ip address is received', () =>
  expect(receiveIpAddress('8.8.8.8')).toEqual({
    type: 'RECEIVE_IP_ADDRESS',
    ipAddress: '8.8.8.8',
  }));

it('should dispatch REQUEST_IP_ADDRESS action when fetchIpAddress action creator is dispatched', () => {
  fetch.mockResponseOnce(JSON.stringify({ ip: '8.8.8.8' }));
  const dispatch = jest.fn();
  fetchIpAddress()(dispatch);
  expect(dispatch).toHaveBeenCalledWith({ type: 'REQUEST_IP_ADDRESS' });
});

it('should dispatch RECEIVE_IP_ADDRESS action when fetchIpAddress action creator is dispatched and the', async () => {
  fetch.mockResponseOnce(JSON.stringify({ ip: '8.8.8.8' }));
  const dispatch = jest.fn();
  await fetchIpAddress()(dispatch);
  expect(dispatch).toHaveBeenCalledWith({ type: 'RECEIVE_IP_ADDRESS', ipAddress: '8.8.8.8' });
});
