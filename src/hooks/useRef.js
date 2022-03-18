import { useEffect, useRef, useState } from 'react';
const Clock = () => {
  const [, setState] = useState(0);
  const intervalRef = useRef();
  const stop = () => clearInterval(intervalRef.current);
  useEffect(() => {
    intervalRef.current = setInterval(() => setState((state) => state + 1), 1000);
    return stop;
  }, []);
  return (
    <div>
      <button onClick={stop}>Stop!</button>
      {new Date().toLocaleTimeString()}
    </div>
  );
};
export default Clock;
