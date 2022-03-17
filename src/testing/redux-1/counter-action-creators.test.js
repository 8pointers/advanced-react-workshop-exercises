import { increment } from './counter-action-creators';

it('increment action payload may contain a numerical delta', () =>
  expect(increment(2)).toEqual({ type: 'INCREMENT', delta: 2 }));

it('if no delta is provided, 1 is the default', () => expect(increment()).toEqual({ type: 'INCREMENT', delta: 1 }));
