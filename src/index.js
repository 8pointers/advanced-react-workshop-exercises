import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UsePromiseDemo } from './hooks/usePromise';
import ObservableDemo from './rxjs/observable';

const Home = () => (
  <div className="list-group">
    <Link className="list-group-item list-group-item-action" to="rxjs/observable">
      Observable
    </Link>
    <Link className="list-group-item list-group-item-action" to="hooks/usePromise">
      usePromise
    </Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="rxjs/observable" element={<ObservableDemo />} />
      <Route path="hooks/usePromise" element={<UsePromiseDemo />} />
    </Routes>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
