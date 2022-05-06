import { deepFreeze } from '../../util';

describe('working with immutable data structures', () => {
  it('should know how to work with arrays', () => {
    const oldMe = deepFreeze({
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    const removeFriend = (person, friend) => {
      //todo - implement so that the test is passing
      return person;
    };
    const newMe = removeFriend(oldMe, 'Bob');
    expect(newMe).toEqual({
      name: 'First',
      friends: ['Alice', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe.enemies).toBe(newMe.enemies);
  });
  it('should know how to work with objects', () => {
    const oldEvent = deepFreeze({
      name: 'Arsenal vs. Leeds',
      tags: ['football', 'pl'],
      market: {
        name: 'Fulltime Result',
        tags: ['football', 'pl', '90 mins'],
        selection: {
          tags: ['football', 'pl', '90 mins', 'arsenal'],
          name: 'Arsenal',
          odds: 1.5,
        },
      },
    });
    const updateOdds = (event, newOdds) => {
      /*
        TODO - implement so that:
          - event object is not mutated
          - parts of the event object that should not change are reused
        */
      return event;
    };
    const newEvent = updateOdds(oldEvent, 1.4);
    expect(newEvent).toEqual({
      name: 'Arsenal vs. Leeds',
      tags: ['football', 'pl'],
      market: {
        name: 'Fulltime Result',
        tags: ['football', 'pl', '90 mins'],
        selection: {
          name: 'Arsenal',
          tags: ['football', 'pl', '90 mins', 'arsenal'],
          odds: 1.4,
        },
      },
    });
    expect(newEvent.tags).toBe(oldEvent.tags);
    expect(newEvent.market.tags).toBe(oldEvent.market.tags);
    expect(newEvent.market.selection.tags).toBe(oldEvent.market.selection.tags);
  });
  it('should know how to work with everything', () => {
    const todos = deepFreeze([
      { id: 2, text: 'Second', isDone: true },
      { id: 1, text: 'First', isDone: false },
      { id: 3, text: 'Third', isDone: true },
    ]);
    const toggleIsDone = (todos, id) => {
      //TODO
      return todos;
    };
    const newTodos = toggleIsDone(todos, 1);
    expect(newTodos).toEqual([
      { id: 2, text: 'Second', isDone: true },
      { id: 1, text: 'First', isDone: true },
      { id: 3, text: 'Third', isDone: true },
    ]);
    expect(newTodos[0]).toBe(todos[0]);
    expect(newTodos[2]).toBe(todos[2]);
  });
});
