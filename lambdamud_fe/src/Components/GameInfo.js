import React from 'react';
import PlayerStats from './PlayerStats';
import PlayerController from './playerControls/PlayerController.jsx';

const GameInfo = () => {
  return(
    <div className="game_info">
      <h1> Game Info </h1>
      <PlayerController/>
      <PlayerStats />
    </div>
  )
}

export default GameInfo;
