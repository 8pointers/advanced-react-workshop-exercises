describe('spread operator', () => {
  it('should understand spread operator 1', () => {
    const player1 = {
      name: 'Myamoto',
      age: 23,
      address: {
        street: 'Ninja Way',
      },
    };
    const player2 = { ...player1, age: 24, colour: 'pink' };
    expect(player2).toEqual({
      name: 'Myamoto',
      age: 24,
      address: {
        street: 'Ninja Way',
      },
      colour: 'pink',
    });
    expect(player2.address).toBe(player1.address);
  });
  it('should understand spread operator 2', () => {
    const player1 = { name: 'Myamoto', age: 23 };
    const player2 = { age: 24, colour: 'pink', ...player1 };
    expect(player2).toEqual({ name: 'Myamoto', age: 23, colour: 'pink' });
  });
  it('should understand spread operator 3', () => {
    const names1 = ['alice', 'bob'];
    const names2 = [...names1, 'carl'];
    expect(names2).toEqual(['alice', 'bob', 'carl']);
  });
});
