import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import HelloWorld from './200-react-1';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
it('should render Hello World!', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => createRoot(container).render(<HelloWorld name="World" />));
  const div = container.querySelector('div');
  expect(div.textContent).toBe('Hello World!');
});
