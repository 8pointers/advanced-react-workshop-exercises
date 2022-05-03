import { memo, useMemo, useState } from 'react';

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
  const increment = useMemo(() => () => setCount(count + 1), [count]);
  const toggle = useMemo(() => () => setIsVisible(!isVisible), [isVisible]);
  return (
    <>
      <Counter {...{ count, increment }} />
      <Toggler {...{ isVisible, toggle }} />
    </>
  );
};

export default Demo;
