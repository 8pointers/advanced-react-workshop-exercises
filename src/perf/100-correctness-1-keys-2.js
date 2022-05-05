import { useEffect, useState } from 'react';

const Demo = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setFlag((flag) => !flag), 1000);
    return () => clearInterval(interval);
  }, []);
  const result = [<div key={0}>Hello World!</div>, <input key={1} type="text" />];
  return flag ? result : result.reverse();
};

export default Demo;
