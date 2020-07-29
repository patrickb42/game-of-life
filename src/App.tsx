import React, { useState, useEffect } from 'react';
import { List } from 'immutable';

import Board from './components/Board';

import './App.scss';
import { isValidPosition } from './utils';

function App() {
  const [paused, setPaused] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [width] = useState(25);
  const [height] = useState(25);
  const [grid, setGrid] = useState(List<boolean>(Array(width * height).fill(false)));
  const [finished, setFinished] = useState(false);

  function buildMemoziedGetNeighborIndexes(size: number) {
    const cache = Array<number[]>(size);

    const getNeighborIndexes = (index: number) => {
      const result = [];
      const x = index % width;
      const y = Math.floor((index - x) / width);

      for (let yOffset = -1; yOffset < 2; yOffset += 1) {
        for (let xOffset = -1; xOffset < 2; xOffset += 1) {
          if (
            isValidPosition({
              x: x + xOffset,
              y: y + yOffset,
              width,
              height,
            })
            && (xOffset !== 0 || yOffset !== 0)
          ) result.push((y + yOffset) * width + (x + xOffset));
        }
      }

      return result;
    };

    return ((index: number) => {
      if (cache[index] !== undefined) return cache[index];
      cache[index] = getNeighborIndexes(index);
      return cache[index];
    });
  }

  const memGetNeighborIndexes = buildMemoziedGetNeighborIndexes(width * height);

  function setNextGeneration() {
    const newGrid = grid.map((item, index, referenceGrid) => {
      const currentlyAlive = referenceGrid.get(index);
      const neighborIndexes = memGetNeighborIndexes(index);
      const aliveNeighborsCount = neighborIndexes.reduce((count, neighborIndex) => (
        count + (referenceGrid.get(neighborIndex) ? 1 : 0)
      ), 0);

      return (currentlyAlive)
        ? (aliveNeighborsCount === 2 || aliveNeighborsCount === 3)
        : (aliveNeighborsCount === 3);
    });

    if (newGrid === grid) setFinished(true);
  }

  useEffect(() => {
    if (paused) return () => false;
    const interval = setInterval(setNextGeneration, 500);
    return () => clearInterval(interval);
  }, [paused]);

  const boardProps = {
    paused,
    setGeneration,
    grid,
    setGrid,
  };

  return (
    <>
      <button type="button" onClick={() => setPaused(!paused)}>{paused ? 'play' : 'pause'}</button>
      <div className="generation-counter">{generation}</div>
      <Board {...boardProps} />
    </>
  );
}

export default App;
