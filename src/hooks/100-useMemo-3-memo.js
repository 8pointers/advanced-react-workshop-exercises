import { memo, useState } from 'react';

const LargeComponent = memo((props) => {
  console.log('LargeComponent');
  return Array.from(props, (_, i) => <div key={i}>Player {i}</div>);
});

const Demo = () => {
  const [text, setText] = useState('');
  return (
    <>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <LargeComponent length={10} />
    </>
  );
};

export default Demo;
