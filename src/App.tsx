import React, { useState, useEffect } from 'react';
import { List } from 'immutable';

import Board from './components/Board';

import './App.scss';

function App() {
  const [paused, setPaused] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [width] = useState(25);
  const [height] = useState(25);
  const [grid, setGrid] = useState(List<boolean>(Array(width * height).fill(false)));

  function setNextGeneration() {
    // pass
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
