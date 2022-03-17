import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './counter-reducer';
import { Counter } from './counter-component';

let container, app;
beforeEach(() => {
  app = (
    <Provider store={createStore(reducer, 123)}>
      <Counter />
    </Provider>
  );
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => document.body.removeChild(container));
it('should render initial count', () => {
  render(app, container);
  const div = container.querySelector('div');
  expect(div.textContent).toBe('123');
});
it('should increment the count when clicked', () => {
  render(app, container);
  container.querySelector('div').dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(container.querySelector('div').textContent).toBe('124');
});
