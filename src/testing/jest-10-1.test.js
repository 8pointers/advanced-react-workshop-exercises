import React from 'react';
import HelloWorld from './jest-10.js';

it('should render Hello World!', () =>
  expect(HelloWorld({ name: 'World' })).toEqual(<div>Hello World!</div>));
