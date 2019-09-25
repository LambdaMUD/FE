import React from "react";
import RoomStats from "./RoomStats";
import PlayerController from "./playerControls/PlayerController.jsx";

const GameInfo = props => {
  return (
    <div className='game_info'>
      <h1> Game Info </h1>
      <PlayerController movePlayer={props.movePlayer} />
      <RoomStats players={props.players} />
    </div>
  );
};

export default GameInfo;
