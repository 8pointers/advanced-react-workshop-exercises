import React from 'react';
import { render } from 'react-dom';
import { UnconnectedCounter } from './counter-component';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => document.body.removeChild(container));
it('should render count', () => {
  render(<UnconnectedCounter count="123" />, container);
  const div = container.querySelector('div');
  expect(div.textContent).toBe('123');
});
it('should invoke onIncrement when clicked', () => {
  const increment = jest.fn();
  render(<UnconnectedCounter count="123" onIncrement={increment} />, container);
  container.querySelector('div').dispatchEvent(new MouseEvent('click', { bubbles: true }));
  expect(increment).toHaveBeenCalledWith(1);
});
