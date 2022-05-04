import counterReducer from './counter-reducer';

it('should have 0 as default state', () =>
  expect(counterReducer(undefined, { type: 'I.N.I.T@123' })).toBe(0));

it('should go up by one when INCREMENT action is dispatched', () =>
  expect(counterReducer(123, { type: 'INCREMENT' })).toBe(124));
