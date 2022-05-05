import { deepFreeze } from '../util';

it('should understand freeze', () => {
  const todos = deepFreeze([
    { title: 'First', isDone: false },
    { title: 'Second', isDone: true },
    { title: 'Third', isDone: false },
  ]);
  expect(() => (todos[1].isDone = false)).toThrowError(
    new Error(`Cannot assign to read only property 'isDone' of object '#<Object>'`)
  );
});
