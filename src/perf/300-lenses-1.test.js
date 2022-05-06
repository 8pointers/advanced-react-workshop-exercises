import R from 'ramda';

const person = {
  name: 'First',
  friends: ['Alice', 'Bob', 'Erin'],
};
const nameLens = R.lens(
  (person) => person.name,
  (name, person) => ({ ...person, name })
);
it('should understand R.view', () => {
  expect(R.view(nameLens, person)).toBe('First');
});
it('should understand R.set', () => {
  const newPerson = R.set(nameLens, 'Second', person);
  expect(newPerson).toEqual({
    name: 'Second',
    friends: ['Alice', 'Bob', 'Erin'],
  });
  expect(newPerson.friends).toBe(person.friends);
});
it('should understand R.over', () => {
  const newPerson = R.over(nameLens, (name) => `${name}!`, person);
  expect(newPerson).toEqual({
    name: 'First!',
    friends: ['Alice', 'Bob', 'Erin'],
  });
});
