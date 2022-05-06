import { createStore, applyMiddleware } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { filter, map } from 'rxjs';
const count = (state = 0, action) => {
  if (action.type === 'NEW_VALUE') {
    return action.value;
  }
  return state;
};
const Counter = () => {
  const [count, dispatch] = [useSelector((state) => state), useDispatch()];
  return <button onClick={() => dispatch({ type: 'START_TIMER' })}>{count}</button>;
};
const timerEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === 'START_TIMER'),
    map(() => ({ type: 'NEW_VALUE', value: new Date().toLocaleTimeString() }))
  );
const epicMiddleware = createEpicMiddleware();
const store = createStore(count, applyMiddleware(epicMiddleware));
epicMiddleware.run(combineEpics(timerEpic));
const Demo = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
export default Demo;
