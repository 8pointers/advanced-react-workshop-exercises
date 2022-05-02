import { useEffect, useState } from 'react';

const MyIp = () => {
  const [ip, setIp] = useState('');
  useEffect(() => {
    fetch(`${window.location.origin}/api/ipify?format=json`)
      .then((response) => response.json())
      .then(({ ip }) => setIp(ip));
  }, []);
  return <div>{ip ? <div role="main">{ip}</div> : <div role="alert">Loading...</div>}</div>;
};

export default MyIp;
