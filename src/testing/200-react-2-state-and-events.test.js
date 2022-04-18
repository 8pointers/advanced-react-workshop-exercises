import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Counter from './200-react-2-state-and-events';

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
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    createRoot(container).render(<Counter />);
  });
  expect(container.querySelector('p').textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');
});

it('should increment the counter when button is clicked', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    createRoot(container).render(<Counter />);
  });
  const button = container.querySelector('button');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(container.querySelector('p').textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
