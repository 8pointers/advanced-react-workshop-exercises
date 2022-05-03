import { useState } from 'react';

const useForceRefresh = () => {
  const [, setCount] = useState(0);
  return () => setCount((count) => count + 1);
};

export default useForceRefresh;
