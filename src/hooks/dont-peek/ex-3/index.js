import { useDebugValue, useEffect, useId, useState, useRef } from 'react';

const useRenderCount = () => {
  const count = ++useRef(0).current;
  useDebugValue(count);
  return count;
};

const useComponentId = () => {
  const componentId = useId();
  useDebugValue(componentId);
  return componentId;
};

const Clock = () => {
  const [renderCount, componentId] = [useRenderCount(), useComponentId()];
  console.log('Component', componentId, 'rendered', renderCount, 'times');
  const [, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setState((state) => state + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>{new Date().toLocaleTimeString()}</div>;
};

export default Clock;
