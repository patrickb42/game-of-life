/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { List } from 'immutable';

import './Board.scss';

type BoardProps = {
  paused: boolean,
  width: number,
  height: number,
}

function Board({ width, height, paused }: BoardProps) {
  const [grid, setGrid] = useState(List<boolean>(Array(width * height).fill(false)));

  return (
    <div className="board">
      {grid.map((alive, index) => (
        <div
          className={`cell ${alive ? 'alive' : ''}`}
          onClick={() => {
            if (!paused) return;
            setGrid((oldGridState) => (oldGridState.set(index, !oldGridState.get(index))));
          }}
        />
      ))}
    </div>
  );
}

export default Board;
