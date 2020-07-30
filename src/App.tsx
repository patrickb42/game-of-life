import React, { useState, useEffect } from 'react';
import { List } from 'immutable';

import Board from './components/Board';
import { buildMemoziedGetNeighborIndexes } from './utils';

import './App.scss';

function App() {
  const [paused, setPaused] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [timeDelay, setTimeDelay] = useState(1000);
  const [width] = useState(25);
  const [height] = useState(25);
  const [defaultGrid] = useState(List<boolean>(Array(width * height).fill(false)));
  const [grid, setGrid] = useState(defaultGrid);
  const [history, setHistory] = useState(List([grid]));
  const [finished, setFinished] = useState(false);
  const [stepper, setStepper] = useState(setTimeout(() => null, 1));

  const memGetNeighborIndexes = buildMemoziedGetNeighborIndexes(width, height);

  function setNextGeneration() {
    const newGrid = grid.map((item, index) => {
      const currentlyAlive = grid.get(index);
      const neighborIndexes = memGetNeighborIndexes(index);
      const aliveNeighborsCount = neighborIndexes.reduce((count, neighborIndex) => (
        count + (grid.get(neighborIndex) ? 1 : 0)
      ), 0);

      return (currentlyAlive)
        ? (aliveNeighborsCount === 2 || aliveNeighborsCount === 3)
        : (aliveNeighborsCount === 3);
    });

    if (newGrid === grid) setFinished(true);
    else {
      setHistory((oldHistory) => oldHistory.push(newGrid));
      setGeneration((oldGeneration) => oldGeneration + 1);
      setGrid(newGrid);
    }
  }

  useEffect(() => {
    if (paused || finished) clearTimeout(stepper);
    else setStepper(setTimeout(setNextGeneration, timeDelay));
    return () => clearTimeout(stepper);
    // eslint-disable-next-line
  }, [paused, finished, grid]);

  const boardProps = {
    paused,
    setGeneration,
    grid,
    setGrid,
    setHistory,
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (finished) return;
          setPaused(!paused);
        }}
      >
        {paused ? 'play' : 'pause'}
      </button>
      <button
        type="button"
        onClick={() => {
          setPaused(true);
          setGeneration(0);
          setGrid(defaultGrid);
        }}
      >
        clear
      </button>
      <div className="generation-counter">{generation}</div>
      <Board {...boardProps} />
    </>
  );
}

export default App;
