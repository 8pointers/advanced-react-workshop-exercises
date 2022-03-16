import { useEffect, useState } from 'react';

const delay = (millis) => new Promise((resolve) => setInterval(resolve, millis));

const useAutoRefresh = (millis) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount((count) => count + 1), millis);
    return () => clearInterval(interval);
  }, [millis]);
  return count;
};

export { delay, useAutoRefresh };
