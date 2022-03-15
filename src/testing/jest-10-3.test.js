import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './jest-10.js';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should start counting from 0', () => {
  render(<HelloWorld name="World" />, container);
  const div = container.querySelector('div');
  expect(div.textContent).toBe('Hello World!');
});
