import React from 'react';
import { createStore } from 'redux';
import Provider from './provider';
import useSelector from './useSelector';
import useDispatch from './useDispatch';

const increment = () => ({ type: 'INCREMENT' });
const reducer = (state = { count: 0 }, action) =>
  action.type === 'INCREMENT' ? { count: state.count + 1 } : state;

const countSelector = (state) => state.count;

const Counter = () => {
  const [count, dispatch] = [useSelector(countSelector), useDispatch()];
  return <button onClick={() => dispatch(increment())}>{count}</button>;
};

const DemoApp = () => (
  <Provider store={createStore(reducer)}>
    <Counter />
  </Provider>
);

export default DemoApp;
