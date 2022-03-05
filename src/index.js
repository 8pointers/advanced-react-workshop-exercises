import React from 'react';
import { render } from 'react-dom';
import './index.css';

const HelloWorld = () => <div>Hello World!</div>;

render(<HelloWorld />, document.getElementById('root'));
