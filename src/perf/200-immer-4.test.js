import produce from 'immer';
import { deepFreeze } from '../util';

//produce(baseState, recipe: (draftState) => void): nextState
//produce(recipe: (draftState, ...args) => void): ((baseState, ...args) => nextState)
const toggle = produce((draft, index) => {
  draft[index].isDone = !draft[index].isDone;
});

it('should understand produce - curried', () => {
  const before = deepFreeze([
    { title: 'First', isDone: false },
    { title: 'Second', isDone: true },
    { title: 'Third', isDone: false },
  ]);
  const after = toggle(before, 1);
  expect(after).toEqual([
    { title: 'First', isDone: false },
    { title: 'Second', isDone: false },
    { title: 'Third', isDone: false },
  ]);
  expect(after[0]).toBe(before[0]);
  expect(after[1]).not.toBe(before[1]);
  expect(after[2]).toBe(before[2]);
});
