import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cleanup, render, screen } from '@testing-library/react';
import MyIp from './200-react-3-async';

const server = setupServer(
  rest.get('/api/ipify?format=json', (_, res, ctx) => res(ctx.json({ ip: '1.2.3.4' })))
);

beforeAll(() => server.listen());
afterEach(cleanup);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should fetch and display your outbound IP address', async () => {
  render(<MyIp />);
  expect(screen.queryByRole('main')).toBe(null);
  expect(screen.getByRole('alert')).toHaveTextContent('Loading...');
  expect(await screen.findByRole('main')).toHaveTextContent('1.2.3.4');
  expect(screen.queryByRole('alert')).toBe(null);
});
