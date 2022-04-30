import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ObservableDemo from './rxjs/observable';

import { getSearchParam } from './util';
import UseRefMotivation from './hooks/useRef-motivation';
import UseRefDemo from './hooks/useRef';
import UseIntervalMotivation from './hooks/1-useInterval-motivation';
import UseContextMotivation from './hooks/2-useContext-motivation';
import UseContextDemo from './hooks/3-useContext';
import UseRenderCountDemo from './hooks/useRenderCount';
import UseDebugValueDemo from './hooks/useDebugValue';
import UseMemoMotivation from './hooks/useMemo-motivation';
import UseMemo from './hooks/useMemo';
import HooksEx1 from './hooks/ex-1';
import HooksEx1Solution from './hooks/dont-peek/ex-1';
import HooksEx2Solution from './hooks/dont-peek/ex-2';
import LoaderDemo from './hooks/dont-peek/loader/demo';
import ReduxDiyDemo from './hooks/dont-peek/redux/demo';
import { UsePromiseDemo } from './hooks/usePromise';
import PerfDemo1 from './perf/perf-1';
import PerfDemo2 from './perf/perf-2';
import PerfDemo3 from './perf/perf-3';

const config = [
  ['hooks/useRef-motivation', 'useRef - motivation', <UseRefMotivation />],
  ['hooks/useRef', 'useRef', <UseRefDemo />],
  ['hooks/useInterval-motivation', 'useInterval - motivation', <UseIntervalMotivation />],
  ['hooks/useContext-motivation', 'useContext - motivation', <UseContextMotivation />],
  ['hooks/useContext', 'useContext', <UseContextDemo />],
  ['hooks/useRenderCount', 'useRenderCount', <UseRenderCountDemo />],
  ['hooks/useDebugValue', 'useDebugValue', <UseDebugValueDemo />],
  ['hooks/useMemo-motivation', 'useMemo - motivation', <UseMemoMotivation />],
  ['hooks/useMemo', 'useMemo', <UseMemo />],
  ['hooks/ex-1', 'Hooks - ex1', <HooksEx1 />],
  ['hooks/usePromise', 'usePromise', <UsePromiseDemo />],
  ['hooks/loader', 'Loader', <LoaderDemo />],
  ['hooks/redux-diy', 'Redux DIY', <ReduxDiyDemo />],
  ['hooks/dont-peek/ex-1', 'Hooks - ex1 solution', <HooksEx1Solution />],
  ['hooks/dont-peek/ex-2', 'Hooks - ex2 solution', <HooksEx2Solution />],
  ['perf/1', 'Perf 1 ', <PerfDemo1 />],
  ['perf/2', 'Perf 2', <PerfDemo2 />],
  ['perf/3', 'Perf 3', <PerfDemo3 />],
  ['rxjs/observable', 'Observable', <ObservableDemo />],
];

const Home = () => (
  <div className="list-group">
    {config.map(([to, title], key) => (
      <Link className="list-group-item list-group-item-action" to={to} key={key}>
        {title}
      </Link>
    ))}
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

const Root = getSearchParam('no-strict-mode') ? Fragment : StrictMode;
createRoot(document.getElementById('root')).render(
  <Root>
    <div className="container-fluid">
      <App />
    </div>
  </Root>
);
