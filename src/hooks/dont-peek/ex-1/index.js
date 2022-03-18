import { useEffect, useRef, useState } from 'react';
const useInterval = (millis, fn) => {
  const callbackRef = useRef();
  useEffect(() => {
    callbackRef.current = fn;
  });
  useEffect(() => {
    console.log('here');
    const interval = setInterval(callbackRef.current, millis);
    return () => clearInterval(interval);
  }, [millis]);
};
const Clock = ({ refreshIntervalInSeconds }) => {
  const getLocalTime = () => new Date().toLocaleTimeString();
  const [time, setTime] = useState(getLocalTime());
  useInterval(1000 * refreshIntervalInSeconds, () => setTime(getLocalTime()));
  return <div>Time: {time}</div>;
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
