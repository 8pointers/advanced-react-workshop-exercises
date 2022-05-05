import { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { getSearchParam } from './util';

import IntroUseState from './hooks/000-intro-1-useState';
import IntroUseReducer from './hooks/000-intro-2-useReducer';
import IntroUseEffect from './hooks/000-intro-3-useEffect';
import UseRefMotivation from './hooks/300-useRef-1-motivation';
import UseRefDemo from './hooks/300-useRef-2.js';
import UseMemoMotivation from './hooks/100-useMemo-1-motivation';
import UseMemo from './hooks/100-useMemo-2';
import MemoDemo from './hooks/100-useMemo-3-memo';
import UseCallbackMotivation from './hooks/200-useCallback-1-motivation';
import UseCallbackViaUseMemo from './hooks/200-useCallback-2-via-useMemo';
import UseCallbackDemo from './hooks/200-useCallback-3';
import UseCallbackDemo2 from './hooks/200-useCallback-4-no-deps';
import UseContextMotivation from './hooks/600-useContext-1-motivation';
import UseContextDemo from './hooks/600-useContext-2';
import UseDebugValueDemo from './hooks/400-useDebugValue-1';
import UseIdDemo from './hooks/500-useId';

import ObservableDemo from './rxjs/observable';

import PerfCorrectnessKeys1 from './perf/100-correctness-1-keys-1';
import PerfCorrectnessKeys2 from './perf/100-correctness-1-keys-2';
import PerfCorrectnessKeys3 from './perf/100-correctness-1-keys-3';
import PerfCorrectnessKeys4 from './perf/100-correctness-1-keys-4';
import PerfCorrectnessKeys5 from './perf/100-correctness-1-keys-5';
import PerfCorrectnessListenersImplicit from './perf/correctness-1-listeners-0';
import PerfCorrectnessListeners1 from './perf/correctness-1-listeners';
import PerfCorrectnessListeners2 from './perf/correctness-1-listeners-2';
import PerfDemo1 from './perf/perf-1';
import PerfDemo2 from './perf/perf-2';
import PerfDemo3 from './perf/perf-3';
import PerfImmerUseState from './perf/200-immer-5-react-1-useState';
import PerfImmerUseImmer from './perf/200-immer-5-react-2-useImmer';

import HooksEx1 from './hooks/ex-1';
import HooksEx2 from './hooks/ex-2';
import HooksEx3 from './hooks/ex-3';
import HooksEx4 from './hooks/ex-4';
import HooksEx5 from './hooks/ex-5';
import HooksEx6 from './hooks/ex-6';
import HooksEx7 from './hooks/ex-7';

import TestingEx4Solution from './testing/dont-peek/ex-4';
import TestingEx5Solution from './testing/dont-peek/ex-5';

import HooksEx1Solution from './hooks/dont-peek/ex-1';
import HooksEx2Solution from './hooks/dont-peek/ex-2';
import HooksEx3Solution from './hooks/dont-peek/ex-3';
import HooksEx4Solution from './hooks/dont-peek/ex-4';
import HooksEx5Solution from './hooks/dont-peek/ex-5';
import HooksEx6Solution from './hooks/dont-peek/ex-6';
import HooksEx7Solution from './hooks/dont-peek/ex-7';

const config = [
  ['/', 'Welcome', <div>It works!</div>],
  ['hooks/intro-useState', 'intro - useState', <IntroUseState />],
  ['hooks/intro-useReducer', 'intro - useReducer', <IntroUseReducer />],
  ['hooks/intro-useEffect', 'intro - useEffect', <IntroUseEffect />],
  ['hooks/useRef-motivation', 'useRef - motivation', <UseRefMotivation />],
  ['hooks/useRef', 'useRef', <UseRefDemo />],
  ['hooks/useMemo-motivation', 'useMemo - motivation', <UseMemoMotivation />],
  ['hooks/useMemo', 'useMemo', <UseMemo />],
  ['hooks/useMemo-memo', 'memo', <MemoDemo />],
  ['hooks/useCallback-motivation', 'useCallback - motivation', <UseCallbackMotivation />],
  ['hooks/useCallback-useMemo', 'useCallback - useMemo', <UseCallbackViaUseMemo />],
  ['hooks/useCallback', 'useCallback', <UseCallbackDemo />],
  ['hooks/useCallback2', 'useCallback - no deps', <UseCallbackDemo2 />],
  ['hooks/useContext-motivation', 'useContext - motivation', <UseContextMotivation />],
  ['hooks/useContext', 'useContext', <UseContextDemo />],
  ['hooks/useDebugValue', 'useDebugValue', <UseDebugValueDemo />],
  ['hooks/useId', 'useId', <UseIdDemo />],

  ['perf/correctness-keys-1', 'Perf - Correctness - keys 1', <PerfCorrectnessKeys1 />],
  ['perf/correctness-keys-2', 'Perf - Correctness - keys 2', <PerfCorrectnessKeys2 />],
  ['perf/correctness-keys-3', 'Perf - Correctness - keys 3', <PerfCorrectnessKeys3 />],
  ['perf/correctness-keys-4', 'Perf - Correctness - keys 4', <PerfCorrectnessKeys4 />],
  ['perf/correctness-keys-5', 'Perf - Correctness - keys 5', <PerfCorrectnessKeys5 />],
  [
    'perf/correctness-1-listeners',
    'Perf - Correctness - listeners implicit',
    <PerfCorrectnessListenersImplicit />,
  ],
  ['perf/correctness-online', 'Perf - Correctness - Online', <PerfCorrectnessListeners1 />],
  [
    'perf/correctness-online-effect',
    'Perf - Correctness - Online effect',
    <PerfCorrectnessListeners2 />,
  ],
  ['perf/1', 'Perf 1 ', <PerfDemo1 />],
  ['perf/2', 'Perf 2', <PerfDemo2 />],
  ['perf/3', 'Perf 3', <PerfDemo3 />],
  ['perf/immer-useState', 'Perf Immer useState', <PerfImmerUseState />],
  ['perf/immer-useImmer', 'Perf Immer useImmer', <PerfImmerUseImmer />],

  ['rxjs/observable', 'Observable', <ObservableDemo />],

  ['hooks/ex-1', 'Hooks - ex1', <HooksEx1 />],
  ['hooks/ex-2', 'Hooks - ex2', <HooksEx2 />],
  ['hooks/ex-3', 'Hooks - ex3', <HooksEx3 />],
  ['hooks/ex-4', 'Hooks - ex4', <HooksEx4 />],
  ['hooks/ex-5', 'Hooks - ex5', <HooksEx5 />],
  ['hooks/ex-6', 'Hooks - ex6', <HooksEx6 />],
  ['hooks/ex-7', 'Hooks - ex7', <HooksEx7 />],

  ['solutions/testing/ex-4', 'Solution - Testing - ex4', <TestingEx4Solution />],
  ['solutions/testing/ex-5', 'Solution - Testing - ex5', <TestingEx5Solution />],

  ['solutions/hooks/ex-1', 'Solution - Hooks - ex1', <HooksEx1Solution />],
  ['solutions/hooks/ex-2', 'Solution - Hooks - ex2', <HooksEx2Solution />],
  ['solutions/hooks/ex-3', 'Solution - Hooks - ex3', <HooksEx3Solution />],
  ['solutions/hooks/ex-4', 'Solution - Hooks - ex4', <HooksEx4Solution />],
  ['solutions/hooks/ex-5', 'Solution - Hooks - ex5', <HooksEx5Solution />],
  ['solutions/hooks/ex-6', 'Solution - Hooks - ex6', <HooksEx6Solution />],
  ['solutions/hooks/ex-7', 'Solution - Hooks - ex7', <HooksEx7Solution />],
];

const App = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            {config.map(([to, title], key) => (
              <Link className="list-group-item list-group-item-action" to={to} key={key}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col">
          <Routes>
            {config
              .map(([path, , element], key) => ({ path, element, key }))
              .map((props) => (
                <Route {...props} />
              ))}
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

const Root = getSearchParam('no-strict-mode') ? Fragment : StrictMode;
createRoot(document.getElementById('root')).render(
  <Root>
    <App />
  </Root>
);
