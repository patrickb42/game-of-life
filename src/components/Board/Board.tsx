/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

// eslint-disable-next-line no-unused-vars
import { List } from 'immutable';

import './Board.scss';

export type BoardProps = {
  paused: boolean,
  grid: List<boolean>,
  setGrid: React.Dispatch<React.SetStateAction<List<boolean>>>,
  setGeneration: React.Dispatch<React.SetStateAction<number>>,
  setHistory: React.Dispatch<React.SetStateAction<List<List<boolean>>>>
}

function Board({
  paused,
  grid,
  setGrid,
  setGeneration,
  setHistory,
}: BoardProps) {
  return (
    <div className="board">
      {grid.map((alive, index) => (
        <div
          className={`cell ${alive ? 'alive' : ''}`}
          onClick={() => {
            if (!paused) return;
            setGeneration(0);
            const newGrid = grid.set(index, !grid.get(index));
            setHistory((oldHistory) => oldHistory.push(newGrid));
            setGrid(newGrid);
          }}
        />
      ))}
    </div>
  );
}

export default Board;
