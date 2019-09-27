import React from 'react';
import PlayerStats from './PlayerStats';
import PlayerController from './playerControls/PlayerController.jsx';
import ChatRoom from './chat/ChatRoom.jsx';

const GameInfo = () => {
  return(
    <div className="game_info">
      <h1> Game Info </h1>
      <PlayerController/>
      <PlayerStats />
      <ChatRoom/>
    </div>
  )
}

export default GameInfo;
