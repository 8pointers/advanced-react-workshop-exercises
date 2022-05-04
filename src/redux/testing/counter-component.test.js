import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './counter-reducer';
import { Counter } from './counter-component';
let app;
beforeEach(() => {
  app = (
    <Provider store={createStore(reducer, 123)}>
      <Counter />
    </Provider>
  );
});
afterEach(cleanup);
it('should render initial count', () => {
  render(app);
  expect(screen.getByText('123')).toHaveTextContent('123');
});
it('should increment the count when clicked', () => {
  render(app);
  fireEvent.click(screen.getByText('123'));
  expect(screen.getByText('124')).toHaveTextContent('124');
});
