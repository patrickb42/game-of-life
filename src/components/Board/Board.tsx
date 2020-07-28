/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { List } from 'immutable';

import './Board.scss';

export type BoardProps = {
  paused: boolean,
  grid: List<boolean>,
  setGrid: React.Dispatch<React.SetStateAction<List<boolean>>>,
  setGeneration: React.Dispatch<React.SetStateAction<number>>,
}

function Board({
  paused,
  grid,
  setGrid,
  setGeneration,
}: BoardProps) {
  return (
    <div className="board">
      {grid.map((alive, index) => (
        <div
          className={`cell ${alive ? 'alive' : ''}`}
          onClick={() => {
            if (!paused) return;
            setGeneration(0);
            setGrid(grid.set(index, !grid.get(index)));
          }}
        />
      ))}
    </div>
  );
}

export default Board;
