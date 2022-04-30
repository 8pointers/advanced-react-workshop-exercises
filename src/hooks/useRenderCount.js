import { useEffect, useState, useRef } from 'react';
const useRenderCount = () => ++useRef(0).current;
const Clock = () => {
  console.log('Clock', 'render count', useRenderCount());
  const [, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setState((state) => state + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>{new Date().toLocaleTimeString()}</div>;
};
export default Clock;
