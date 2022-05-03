import { useEffect, useState } from 'react';

const Clock = () => {
  const [, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setState((state) => state + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <button onClick={() => console.log('Ideas?')}>Stop!</button>
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default Clock;
