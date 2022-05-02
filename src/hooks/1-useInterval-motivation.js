import { useEffect, useState } from 'react';

const Clock = ({ refreshIntervalInSeconds }) => {
  const [, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setState((state) => state + 1),
      1000 * refreshIntervalInSeconds
    );
    return () => clearInterval(interval);
  }, [refreshIntervalInSeconds]);
  return <div>{new Date().toLocaleTimeString()}</div>;
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
