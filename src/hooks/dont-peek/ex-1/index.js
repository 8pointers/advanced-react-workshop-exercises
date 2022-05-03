import { useEffect, useState } from 'react';

const Clock = () => {
  const [, setState] = useState(0);
  const [shouldCount, setShouldCount] = useState(true);
  useEffect(() => {
    if (shouldCount) {
      const interval = setInterval(() => setState((state) => state + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [shouldCount]);
  return (
    <div>
      <button onClick={() => setShouldCount(!shouldCount)}>{shouldCount ? 'Stop' : 'Start'}</button>
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default Clock;
