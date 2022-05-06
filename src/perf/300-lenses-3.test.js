import R from 'ramda';

const person = {
  name: 'First',
  friends: ['Alice', 'Bob', 'Erin'],
  address: {
    street: 'Ninja Way',
    postcode: 'AA1 1AA',
  },
};

it('should understand R.lensPath', () => {
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
