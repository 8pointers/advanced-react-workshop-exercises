import { applyMiddleware, createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const start = (dispatch) => setInterval(() => dispatch({ type: 'INCREMENT' }), 1000);

const Counter = connect(
  (value) => ({ value }),
  (dispatch) => ({ start: () => dispatch(start) })
)(({ value, start }) => <button onClick={start}>{value}</button>);

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch);
  } else {
    return next(action);
  }
};
const store = createStore(
  (state = 0, action) => (action.type === 'INCREMENT' ? state + 1 : state),
  applyMiddleware(thunkMiddleware)
);

const Demo = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default Demo;
