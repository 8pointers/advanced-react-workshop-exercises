import fetchMock from 'jest-fetch-mock';
import { cleanup, render, screen } from '@testing-library/react';
import MyIp from './200-react-3-async';

afterEach(cleanup);

it('should fetch and display your outbound IP address', async () => {
  fetchMock.resetMocks();
  fetch.mockResponseOnce(JSON.stringify({ ip: '1.2.3.4' }));
  render(<MyIp />);
  expect(screen.queryByRole('main')).toBe(null);
  expect(screen.getByRole('alert')).toHaveTextContent('Loading...');
  expect(await screen.findByRole('main')).toHaveTextContent('1.2.3.4');
  expect(screen.queryByRole('alert')).toBe(null);
});
