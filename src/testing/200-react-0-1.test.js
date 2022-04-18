const HelloWorld = ({ name }) => <div>Hello {name}!</div>;

it('should render Hello World!', () =>
  expect(HelloWorld({ name: 'World' })).toEqual(<div>Hello World!</div>));
