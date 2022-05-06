describe('destructuring', () => {
  it('should understand destructuring 1', () => {
    const player = { name: 'Myamoto', age: 23, colour: 'red' };
    const { name, age } = player;
    expect(name).toBe('Myamoto');
    expect(age).toBe(23);
    const { name: myName, age: myAge } = player;
    expect(myName).toBe('Myamoto');
    expect(myAge).toBe(23);
  });
  it('should understand destructuring 2', () => {
    const employee = { name: 'Myamoto', age: 23, supervisor: 'Hattori' };
    const { supervisor, ...person } = employee;
    expect(supervisor).toBe('Hattori');
    expect(person).toEqual({ name: 'Myamoto', age: 23 });
  });
  it('should understand destructuring 3', () => {
    const names1 = ['alice', 'bob', 'carl'];
    const [, ...names2] = names1;
    expect(names2).toEqual(['bob', 'carl']);
  });
});
