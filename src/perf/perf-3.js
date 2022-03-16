import React, { useEffect, useState } from 'react';

const Child = React.memo(({ person, times }) =>
  Array.from({ length: times }).map((_, key) => <div key={key}>Hello {person.name}!</div>)
);

const Parent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount((count) => count + 1), 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {count}
      <Child person={{ name: 'World' }} times={100} />
    </div>
  );
};

export default Parent;
