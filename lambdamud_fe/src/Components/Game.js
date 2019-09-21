import React from 'react';
import GameTitle from './GameTitle';
import GameBoard from './GameBoard';

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
        <GameBoard />
      </div>
    )
  }
}

export default Game;
