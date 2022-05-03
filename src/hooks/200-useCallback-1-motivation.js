import { memo, useState } from 'react';

const Counter = memo(({ count, increment }) => {
  console.log('Counter');
  return <button onClick={increment}>{count}</button>;
});

const Toggler = memo(({ isVisible, toggle }) => {
  console.log('Toggler');
  return <button onClick={toggle}>{isVisible ? 'Yes' : 'No'}</button>;
});

const Demo = () => {
  console.log('Demo');
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <Counter count={count} increment={() => setCount(count + 1)} />
      <Toggler isVisible={isVisible} toggle={() => setIsVisible(!isVisible)} />
    </>
  );
};

export default Demo;
