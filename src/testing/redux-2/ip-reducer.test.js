import ipReducer from './ip-reducer';

it('should have an empty object as default initial state', () =>
  expect(ipReducer(undefined, { type: 'I.N.I.T@123' })).toEqual({}));

it('should set isFetching property to true when REQUEST_IP_ADDRESS is dispatched', () =>
  expect(ipReducer({}, { type: 'REQUEST_IP_ADDRESS' })).toEqual({ isFetching: true }));

it('should set isFetching property to false when RECEIVE_IP_ADDRESS is dispatched', () =>
  expect(ipReducer({}, { type: 'RECEIVE_IP_ADDRESS', ipAddress: '8.8.8.8' })).toMatchObject({ isFetching: false }));

it('should set ipAddress property  when RECEIVE_IP_ADDRESS is dispatched', () =>
  expect(ipReducer({}, { type: 'RECEIVE_IP_ADDRESS', ipAddress: '8.8.8.8' })).toMatchObject({ ipAddress: '8.8.8.8' }));
