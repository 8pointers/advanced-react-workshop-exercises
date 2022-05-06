import { applyMiddleware, createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const Counter = connect(
  (value) => ({ value }),
  (dispatch) => ({ onIncrement: () => dispatch({ type: 'INCREMENT' }) })
)(({ value, onIncrement }) => <button onClick={onIncrement}>{value}</button>);

const loggingMiddleware = (store) => (next) => (action) => {
  const previousState = store.getState();
  let result = next(action);
  console.log(previousState, action, store.getState());
  return result;
};
const store = createStore(
  (state = 0, action) => (action.type === 'INCREMENT' ? state + 1 : state),
  applyMiddleware(loggingMiddleware)
);

const Demo = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default Demo;
