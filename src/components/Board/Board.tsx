import React from 'react';

import './Board.scss';

function Board() {
  return (
    <div className="board">
      {Array(625).fill(true).map(() => {
        return (<div className="cell on" />);
      })}
    </div>
  );
}

export default Board;
