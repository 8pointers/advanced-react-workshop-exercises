import { useState } from 'react';

const Player = ({ name }) => {
  const [balance, setBalance] = useState(0);
  return <div onClick={() => setBalance((b) => b + 1)}>{`${name} - ${balance}`}</div>;
};

const Demo = () => {
  const [players, setPlayers] = useState(
    Array.from({ length: 5 }, (_, id) => ({ id, name: `Player ${id}` }))
  );
  const shuffle = () => setPlayers(([player, ...players]) => [...players, player]);
  return (
    <>
      <button onClick={shuffle}>Shuffle</button>
      {players.map(({ name, id }) => (
        <Player key={id} name={name} />
      ))}
    </>
  );
};

export default Demo;
