import { useDebugValue, useEffect, useState, useRef } from 'react';
const useRenderCount = () => {
  const count = ++useRef(0).current;
  useDebugValue(count);
  return count;
};
const Clock = () => {
  useRenderCount();
  const [, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setState((state) => state + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>{new Date().toLocaleTimeString()}</div>;
};
export default Clock;
