import { useReducer } from 'react';

const Counter = () => {
  const [count, dispatch] = useReducer(
    (count, { type }) => (type === 'INCREMENT' ? count + 1 : count),
    0
  );
  return <button onClick={() => dispatch({ type: 'INCREMENT' })}>{count}</button>;
};

export default Counter;
