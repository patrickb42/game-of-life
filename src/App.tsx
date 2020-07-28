import React, { useState } from 'react';

import Board from './components/Board';

import './App.scss';

function App() {
  const [paused, setPaused] = useState(true);
  const [width] = useState(25);
  const [height] = useState(25);

  const boardProps = { width, height, paused };

  return (
    <Board {...boardProps} />
  );
}

export default App;
