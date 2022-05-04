import React, { useState } from 'react';
import classnames from 'classnames';
import './game-of-life.css';

const cellKey = (row, col) => `${row}_${col}`;

const GameOfLife = ({ n, width, height }) => {
  const [isAlive, setIsAlive] = useState({});
  const isCellAlive = (row, col) => isAlive[cellKey(row, col)];
  const toggleCellState = (row, col) =>
    setIsAlive((isAlive) => {
      const key = cellKey(row, col);
      const { [key]: isCellAlive, ...result } = isAlive;
      return isCellAlive ? result : { [key]: true, ...result };
    });
  const tick = () =>
    fetch('/api/gameOfLife', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(isAlive),
    })
      .then((response) => response.json())
      .then(setIsAlive);
  return (
    <div style={{ width: n * width, height: n * height }}>
      <div>
        {Array.from({ length: n * n })
          .map((_, i) => ({ row: Math.floor(i / n), column: i % n }))
          .map(({ row, column }, i) => (
            <div
              key={i}
              className={classnames({
                cell: true,
                alive: isCellAlive(row, column),
              })}
              style={{ top: 20 * row, left: 20 * column, width, height }}
              onClick={() => toggleCellState(row, column)}
            />
          ))}
      </div>
      <button onClick={tick}>Tick</button>
    </div>
  );
};

export default GameOfLife;
