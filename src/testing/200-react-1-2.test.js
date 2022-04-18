import { cleanup, render, screen } from '@testing-library/react';
import HelloWorld from './200-react-1';

afterEach(cleanup);
it('should render Hello World!', () => {
  render(<HelloWorld name="World" />);
  expect(screen.getByText(/Hello/)).toHaveTextContent(/^Hello World!$/);
});
