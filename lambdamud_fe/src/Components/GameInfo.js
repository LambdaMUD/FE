import React from 'react';
import PlayerStats from './PlayerStats';
import PlayerController from './playerControls/PlayerController.jsx';
import ChatRoom from './chat/ChatRoom.jsx';

const GameInfo = (props) => {
  return(
    <div className="game_info">
      <h1> Game Info </h1>
      <PlayerController movePlayer={props.movePlayer}/>
      <PlayerStats chooseCharacter={props.chooseCharacter} />
      <ChatRoom username={props.username}/>
    </div>
  )
}

export default GameInfo;
