import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UsePromiseDemo } from './hooks/usePromise';
import ObservableDemo from './rxjs/observable';
import UseIntervalMotivation from './hooks/1-useInterval-motivation';
import HooksEx1 from './hooks/ex-1';
import HooksEx1Solution from './hooks/dont-peek/ex-1';
import LoaderDemo from './hooks/dont-peek/loader/demo';
import ReduxDiyDemo from './hooks/dont-peek/redux/demo';
import PerfDemo1 from './perf/perf-1';
import PerfDemo2 from './perf/perf-2';
import PerfDemo3 from './perf/perf-3';

const config = [
  ['rxjs/observable', 'Observable', <ObservableDemo />],
  ['hooks/useInterval-motivation', 'useInterval - motivation', <UseIntervalMotivation />],
  ['hooks/ex-1', 'Hooks - ex1', <HooksEx1 />],
  ['hooks/dont-peek/ex-1', 'Hooks - ex1 solution', <HooksEx1Solution />],
  ['hooks/usePromise', 'usePromise', <UsePromiseDemo />],
  ['hooks/loader', 'Loader', <LoaderDemo />],
  ['hooks/redux-diy', 'Redux DIY', <ReduxDiyDemo />],
  ['perf/1', 'Perf 1 ', <PerfDemo1 />],
  ['perf/2', 'Perf 2', <PerfDemo2 />],
  ['perf/3', 'Perf 3', <PerfDemo3 />],
];

const Home = () => (
  <div className="list-group">
    {config.map(([to, title], key) => (
      <Link className="list-group-item list-group-item-action" to={to} key={key}>
        {title}
      </Link>
    ))}
    {/* <Link className="list-group-item list-group-item-action" to="rxjs/observable">
      Observable
    </Link>
    <Link className="list-group-item list-group-item-action" to="hooks/usePromise">
      usePromise
    </Link>
    <Link className="list-group-item list-group-item-action" to="hooks/loader">
      loader
    </Link>
    <Link className="list-group-item list-group-item-action" to="hooks/redux-diy">
      redux diy
    </Link>
    <Link className="list-group-item list-group-item-action" to="perf/1">
      perf 1
    </Link>
    <Link className="list-group-item list-group-item-action" to="perf/2">
      perf 2
    </Link>
    <Link className="list-group-item list-group-item-action" to="perf/3">
      perf 3
    </Link> */}
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      {[['/', 'Home', <Home />], ...config]
        .map(([path, , element], key) => ({ path, element, key }))
        .map((props) => (
          <Route {...props} />
        ))}
    </Routes>
  </BrowserRouter>
);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
