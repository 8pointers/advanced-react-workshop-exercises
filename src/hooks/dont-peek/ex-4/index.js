import { useState } from 'react';
import useInterval from './useInterval';
import useForceRefresh from './useForceRefresh';

const Clock = ({ refreshIntervalInSeconds }) => {
  useInterval(1000 * refreshIntervalInSeconds, useForceRefresh);
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
