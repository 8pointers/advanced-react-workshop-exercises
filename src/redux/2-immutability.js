import { combineReducers, createStore } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';
const count = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};
const visible = (state = true, action) => {
  if (action.type === 'TOGGLE') {
    return !state;
  }
  return state;
};
const Counter = () => {
  console.log('Counter');
  const [count, dispatch] = [useSelector((state) => state.count), useDispatch()];
  return <button onClick={() => dispatch({ type: 'INCREMENT' })}>{count}</button>;
};
const Toggler = () => {
  console.log('Toggler');
  const [visible, dispatch] = [useSelector((state) => state.visible), useDispatch()];
  return <button onClick={() => dispatch({ type: 'TOGGLE' })}>{visible ? 'On' : 'Off'}</button>;
};
const Demo = () => (
  <Provider store={createStore(combineReducers({ count, visible }))}>
    <Counter />
    <Toggler />
  </Provider>
);
export default Demo;
