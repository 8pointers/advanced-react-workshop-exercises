import { useEffect, useRef, useState } from 'react';
const useForceRefresh = () => {
  const [, setCount] = useState(0);
  return () => setCount((count) => count + 1);
};
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
const Clock = ({ refreshIntervalInSeconds }) => {
  const refresh = useForceRefresh();
  useInterval(1000 * refreshIntervalInSeconds, refresh);
  return <div>Time: {new Date().toLocaleTimeString()}</div>;
};
const Demo = () => {
  const [seconds, setSeconds] = useState(1);
  return (
    <>
      <button onClick={() => setSeconds((seconds) => seconds + 1)}>+</button>
      <Clock refreshIntervalInSeconds={seconds} />
    </>
  );
};
export default Demo;
