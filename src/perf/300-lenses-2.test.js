import R from 'ramda';

const person = {
  name: 'First',
  friends: ['Alice', 'Bob', 'Erin'],
};

it('should understand R.lensProp', () => {
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
