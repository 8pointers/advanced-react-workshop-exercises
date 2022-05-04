import R from 'ramda';

describe('Lenses', () => {
  it('should understand 1', () => {
    const person = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Erin'],
    };
    const nameLens = R.lens(
      (person) => person.name,
      (name, person) => ({ ...person, name })
    );
    expect(R.view(nameLens, person)).toBe('First');
    const newPerson = R.set(nameLens, 'Second', person);
    expect(newPerson).toEqual({
      name: 'Second',
      friends: ['Alice', 'Bob', 'Erin'],
    });
    expect(newPerson.friends).toBe(person.friends);
    const anotherNewPerson = R.over(nameLens, (name) => `${name}!`, person);
    expect(anotherNewPerson).toEqual({
      name: 'First!',
      friends: ['Alice', 'Bob', 'Erin'],
    });
  });
  it('should understand 2', () => {
    const person = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Erin'],
    };
    const nameLens = R.lensProp('name');
    expect(R.view(nameLens, person)).toBe('First');
    const newPerson = R.set(nameLens, 'Second', person);
    expect(newPerson).toEqual({
      name: 'Second',
      friends: ['Alice', 'Bob', 'Erin'],
    });
    expect(newPerson.friends).toBe(person.friends);
    const anotherNewPerson = R.over(nameLens, (name) => `${name}!`, person);
    expect(anotherNewPerson).toEqual({
      name: 'First!',
      friends: ['Alice', 'Bob', 'Erin'],
    });
  });
  it('should understand 3', () => {
    const person = {
      name: 'First',
      friends: ['Alice', 'Bob', 'Erin'],
      address: {
        street: 'Ninja Way',
        postcode: 'AA1 1AA',
      },
    };
    const streetLens = R.lensPath(['address', 'street']);
    expect(R.view(streetLens, person)).toBe('Ninja Way');
    const newPerson = R.set(streetLens, 'Samurai Way', person);
    expect(newPerson).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Erin'],
      address: {
        street: 'Samurai Way',
        postcode: 'AA1 1AA',
      },
    });
    const anotherNewPerson = R.over(streetLens, (name) => `${name}!`, person);
    expect(anotherNewPerson).toEqual({
      name: 'First',
      friends: ['Alice', 'Bob', 'Erin'],
      address: {
        street: 'Ninja Way!',
        postcode: 'AA1 1AA',
      },
    });
  });
});
