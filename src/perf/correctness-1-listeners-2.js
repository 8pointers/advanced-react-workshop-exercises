import { useEffect, useState } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    const listener = () => setIsOnline(window.navigator.onLine);
    const eventTypes = ['online', 'offline'];
    eventTypes.forEach((t) => window.addEventListener(t, listener));
    return () => eventTypes.forEach((t) => window.removeEventListener(t, listener));
  }, []);
  return <span>{isOnline ? '😀' : '🤕'}</span>;
};

const Demo = () => {
  const [text, setText] = useState('');
  return (
    <>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <OnlineStatus />
    </>
  );
};

export default Demo;
