import { memo, useState } from 'react';
const Player = ({ player: { name, age } }) => <div>{`${name} - ${age}`}</div>;
const MemoizedPlayer = memo(Player);
const Demo = () => {
  const [players, setPlayers] = useState(
    Array.from({ length: 5 }, (_, i) => ({ name: `Player ${i}`, age: i }))
  );
  const withoutMutation = () =>
    setPlayers(players.map(({ age, ...player }) => ({ ...player, age: age + 1 })));
  const withMutation1 = () => {
    players.forEach((player) => player.age++);
    setPlayers(players);
  };
  const withMutation2 = () =>
    setPlayers(
      players.map((player) => {
        player.age++;
        return player;
      })
    );
  return [
    <button onClick={withoutMutation}>Without Mutation</button>,
    <button onClick={withMutation1}>With Mutation 1</button>,
    <button onClick={withMutation2}>With Mutation 2</button>,
    ...players.flatMap((player, i) => [
      <div key={3 * i}>{`${player.name} - ${player.age}`}</div>,
      <Player key={3 * i + 1} player={player} />,
      <MemoizedPlayer key={3 * i + 2} player={player} />,
    ]),
  ];
};
export default Demo;
