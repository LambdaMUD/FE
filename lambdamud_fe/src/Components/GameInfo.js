import React from 'react';
import PlayerStats from './PlayerStats';
import PlayerController from './playerControls/PlayerController.jsx';

const GameInfo = (props) => {
  return(
    <div className="game_info">
      <h1> Game Info </h1>
      <PlayerController movePlayer={props.movePlayer}/>
      <PlayerStats />
    </div>
  )
}

export default GameInfo;
