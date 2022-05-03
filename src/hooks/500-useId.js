import { useId, useState } from 'react';

const Player = ({ name }) => {
  const componentId = useId();
  return (
    <div>
      {name} (componentId: {componentId})
    </div>
  );
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
        <Player key={id} name={name} />
      ))}
    </>
  );
};

export default Demo;
