import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UsePromiseDemo } from './hooks/usePromise';
import ObservableDemo from './rxjs/observable';
import LoaderDemo from './hooks/dont-peek/loader/demo';
import PerfDemo1 from './perf/perf-1';
import PerfDemo2 from './perf/perf-2';
import PerfDemo3 from './perf/perf-3';

const Home = () => (
  <div className="list-group">
    <Link className="list-group-item list-group-item-action" to="rxjs/observable">
      Observable
    </Link>
    <Link className="list-group-item list-group-item-action" to="hooks/usePromise">
      usePromise
    </Link>
    <Link className="list-group-item list-group-item-action" to="hooks/loader">
      loader
    </Link>
    <Link className="list-group-item list-group-item-action" to="perf/1">
      perf 1
    </Link>
    <Link className="list-group-item list-group-item-action" to="perf/2">
      perf 2
    </Link>
    <Link className="list-group-item list-group-item-action" to="perf/3">
      perf 3
    </Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="rxjs/observable" element={<ObservableDemo />} />
      <Route path="hooks/usePromise" element={<UsePromiseDemo />} />
      <Route path="hooks/loader" element={<LoaderDemo />} />
      <Route path="perf/1" element={<PerfDemo1 />} />
      <Route path="perf/2" element={<PerfDemo2 />} />
      <Route path="perf/3" element={<PerfDemo3 />} />
    </Routes>
  </BrowserRouter>
);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
