import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import reducer from './ip-reducer';
import { IP } from './ip-component';

let app;
beforeEach(() => {
  fetch.resetMocks();
  app = (
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
      <IP />
    </Provider>
  );
});
afterEach(() => {
  fetch.resetMocks();
  cleanup();
});
it.only('should fetch and render outbound IP address when fetch button clicked', async () => {
  render(app);
  fetch.mockResponseOnce(JSON.stringify({ ip: '8.8.8.8' }));
  fireEvent.click(screen.getByTestId('fetch'));
  expect((await screen.findByTestId('ip')).textContent).toBe('IP: 8.8.8.8');
});
