import { useEffect, useState } from 'react';

const Editor = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    document.title = text;
  }, [text]);
  return <input type="text" onChange={(event) => setText(event.target.value)} />;
};

export default Editor;
