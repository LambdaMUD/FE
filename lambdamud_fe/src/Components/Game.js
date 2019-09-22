import React from 'react';
import GameTitle from './GameTitle';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';

class Game extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      id: "",
      players: []
    }
  }

  render(){
    return(
      <div>
        <GameTitle />
        <div className="game_container">
          <GameBoard />
          <GameInfo />
        </div>

      </div>
    )
  }
}

export default Game;
