import { useState } from 'react';
const Remote = ({ onIncrement }) => <button onClick={onIncrement}>+</button>;
const InBetween = ({ label, onIncrement }) => (
  <div>
    {label}
    <Remote onIncrement={onIncrement} />
  </div>
);
const Demo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <InBetween label="left: " onIncrement={() => setCount((count) => count + 1)} />
    </>
  );
};
export default Demo;
