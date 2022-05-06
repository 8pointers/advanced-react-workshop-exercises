import { useId, useState } from 'react';

const Player = ({ name }) => {
  const result = <div>{name}</div>;
  return result;
};

const Demo = () => {
  const [players, setPlayers] = useState(
    Array.from({ length: 5 }, (_, id) => ({ id, name: `Player ${id}` }))
  );
  const shuffle = () => setPlayers(([player, ...players]) => [...players, player]);
  return (
    <>
      <button onClick={shuffle}>Shuffle</button>
      {players.map(({ id, name }) => (
        <Player key={0} name={name} />
      ))}
    </>
  );
};

export default Demo;
