import { createContext, useContext, useState } from 'react';
const countContext = createContext();
const Remote = () => {
  const onIncrement = useContext(countContext);
  return <button onClick={onIncrement}>+</button>;
};
const InBetween = ({ label }) => (
  <div>
    {label}
    <Remote />
  </div>
);
const Demo = () => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={() => setCount((count) => count + 1)}>
      {count}
      <InBetween label="left: " onIncrement={() => setCount((count) => count + 1)} />
    </countContext.Provider>
  );
};
export default Demo;
