const Greeter = () => <button onClick={() => alert('Hello')}>Click me!</button>;

it('problematic too', () => {
  expect(Greeter()).toEqual(<button onClick={() => alert('Hello')}>Click me!</button>);
});
