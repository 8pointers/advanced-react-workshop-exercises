describe('working with immutable data structures', () => {
  it('should understand what not to do', () => {
    const oldMe = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    };
    const updateName = (person, newName) => {
      person.name = newName;
      return person;
    };
    const newMe = updateName(oldMe, 'Second');
    expect(newMe).toEqual({
      name: 'Second',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    /* will fail */ expect(oldMe).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
  });
  //todo parse/serialize
  it('should understand 1', () => {
    const oldMe = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    };
    const updateName = (person, newName) => ({
      name: newName,
      friends: person.friends,
      enemies: person.enemies,
    });
    const newMe = updateName(oldMe, 'Second');
    expect(newMe).toEqual({
      name: 'Second',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe.friends).toBe(newMe.friends);
    expect(oldMe.enemies).toBe(newMe.enemies);
  });
  it('should understand 2', () => {
    const oldMe = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    };
    const updateName = (person, newName) => ({ ...person, name: newName });
    const newMe = updateName(oldMe, 'Second');
    expect(newMe).toEqual({
      name: 'Second',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe.friends).toBe(newMe.friends);
    expect(oldMe.enemies).toBe(newMe.enemies);
  });
  it('should understand 3', () => {
    const oldMe = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    };
    const addFriend = ({ friends, ...person }, friend) => ({ ...person, friends: [...friends, friend] });
    const newMe = addFriend(oldMe, 'Xavier');
    expect(newMe).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl', 'Xavier'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    });
    expect(oldMe.enemies).toBe(newMe.enemies);
  });
  it('should understand 4', () => {
    const oldMe = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Carl'],
      enemies: ['Dave', 'Erin', 'Fred'],
    };
    const removeFriend = (person, friend) => {
      //todo - implement so that the test is passing
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
  it('should understand 5', () => {
    const oldEvent = {
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
    };
    const updateOdds = (event, newOdds) => {
      /*
      TODO - implement so that:
        - event object is not mutated
        - parts of the event object that should not change are reused
      */
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
    expect(oldEvent).toEqual({
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
    expect(newEvent.tags).toBe(oldEvent.tags);
    expect(newEvent.market.tags).toBe(oldEvent.market.tags);
    expect(newEvent.market.selection.tags).toBe(oldEvent.market.selection.tags);
  });
});
