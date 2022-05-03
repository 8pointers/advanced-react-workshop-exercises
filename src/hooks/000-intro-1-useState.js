import { useState } from 'react';

const Counter = () => {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(state + 1)}>{state}</button>;
};

export default Counter;
