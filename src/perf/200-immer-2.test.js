import produce from 'immer';
import { deepFreeze } from '../util';

it('should understand produce', () => {
  const before = deepFreeze([
    { title: 'First', isDone: false },
    { title: 'Second', isDone: true },
    { title: 'Third', isDone: false },
  ]);
  const after = produce(before, (draft) => {
    draft[1].isDone = false;
  });
  expect(after).toEqual([
    { title: 'First', isDone: false },
    { title: 'Second', isDone: false },
    { title: 'Third', isDone: false },
  ]);
  expect(after[0]).toBe(before[0]);
  expect(after[1]).not.toBe(before[1]);
  expect(after[2]).toBe(before[2]);
});
