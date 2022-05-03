import { useEffect, useRef } from 'react';

const useInterval = (millis, fn) => {
  const callbackRef = useRef();
  useEffect(() => {
    callbackRef.current = fn;
  });
  useEffect(() => {
    const interval = setInterval(callbackRef.current, millis);
    return () => clearInterval(interval);
  }, [millis]);
};

export default useInterval;
