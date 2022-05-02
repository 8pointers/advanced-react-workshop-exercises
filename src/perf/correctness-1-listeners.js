import { useState } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  window.addEventListener('online', () => setIsOnline(true));
  window.addEventListener('offline', () => setIsOnline(false));
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
