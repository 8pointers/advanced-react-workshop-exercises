const HelloWorld = () => <div>Hello World!</div>;

it('should render Hello World!', () => {
  expect(HelloWorld()).toEqual(<div>Hello World!</div>);
});
