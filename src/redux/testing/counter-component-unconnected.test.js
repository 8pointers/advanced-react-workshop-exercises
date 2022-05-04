import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { UnconnectedCounter } from './counter-component';

afterEach(cleanup);
it('should render count', () => {
  render(<UnconnectedCounter count="123" />);
  const div = screen.getByText('123');
  expect(div.textContent).toBe('123');
});
it('should invoke onIncrement when clicked', () => {
  const increment = jest.fn();
  render(<UnconnectedCounter count="123" onIncrement={increment} />);
  fireEvent.click(screen.getByText('123'));
  expect(increment).toHaveBeenCalledWith(1);
});
