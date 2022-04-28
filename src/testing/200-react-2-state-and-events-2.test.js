import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Counter from './200-react-2-state-and-events';

afterEach(cleanup);
it('should start counting from 0', () => {
  render(<Counter />);
  expect(screen.getByText(/You clicked/)).toHaveTextContent('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');
});

it('should increment the counter when button is clicked', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Click me'));
  expect(screen.getByText(/You clicked/)).toHaveTextContent('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
