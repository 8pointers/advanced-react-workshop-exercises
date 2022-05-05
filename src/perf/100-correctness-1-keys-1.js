import { useEffect, useState } from 'react';

const Demo = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setFlag((flag) => !flag), 1000);
    return () => clearInterval(interval);
  }, []);
  return flag ? (
    <>
      <div>Hello World!</div>
      <input type="text" />
    </>
  ) : (
    <>
      <input type="text" />
      <div>Hello World!</div>
    </>
  );
};

export default Demo;
