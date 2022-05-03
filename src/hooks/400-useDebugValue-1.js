import { useDebugValue, useState } from 'react';

const useMyCustomHook = (id) => useDebugValue(`This is player ${id}`);

const Player = ({ id, name }) => {
  useState(id);
  useMyCustomHook(id);
  return <div>{name}</div>;
};

const Demo = () =>
  Array.from({ length: 5 }, (_, i) => <Player key={i} id={i} name={`Player ${i}`} />);

export default Demo;
