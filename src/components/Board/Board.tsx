/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

// eslint-disable-next-line no-unused-vars
import { List } from 'immutable';

import { newRecord } from '../../utils';
// eslint-disable-next-line no-unused-vars
import { ReadonlyRecord } from '../../react-app-env';

import './Board.scss';

export type BoardProps = {
  paused: boolean,
  grid: List<boolean>,
  setGrid: React.Dispatch<React.SetStateAction<List<boolean>>>,
  setGeneration: React.Dispatch<React.SetStateAction<number>>,
  setHistory: React.Dispatch<React.SetStateAction<List<ReadonlyRecord<{
    grid: List<boolean>;
    generation: number;
}>>>>,
  setFinished: React.Dispatch<React.SetStateAction<boolean>>,
}

function Board({
  paused,
  grid,
  setGrid,
  setGeneration,
  setHistory,
  setFinished,
}: BoardProps) {
  return (
    <div className="board">
      {grid.map((alive, index) => (
        <div
          className={`cell ${alive ? 'alive' : ''}`}
          onClick={() => {
            if (!paused) return;
            setGeneration(0);
            setFinished(false);
            const newGrid = grid.set(index, !grid.get(index));
            setHistory((oldHistory) => {
              const nextEntry = {
                grid: newGrid,
                generation: 0,
              };
              const tail = oldHistory.get(-1);
              return oldHistory.push((tail !== undefined)
                ? tail.merge(nextEntry)
                : newRecord({ defaultValues: nextEntry }));
            });
            setGrid(newGrid);
          }}
        />
      ))}
    </div>
  );
}

export default Board;
