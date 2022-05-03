import { useState } from 'react';

const useRenderCount = () => ++useRef(0).current;

const Counter = () => {
  const c = useRenderCount();
  console.log('Clock', 'render count', c);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
    </div>
  );
};

export default Clock;
