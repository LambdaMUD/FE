import React from 'react';
import axios from 'axios';
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

  componentDidMount(){
    const reqOptions = {
      headers: {
        Authorization: "token 01b1d850b901ce65c5dfeb820457072a1a9a41cf"
      }
    }
    axios
      .get("https://lambdamud-be.herokuapp.com/api/adv/reset", reqOptions)
      .then(res => {
        this.setState({
          player: {
            row: res.data.row,
            column: res.data.column
          }
        })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  movePlayer = (direction) => {
    const reqOptions = {
      headers: {
        Authorization: "token 01b1d850b901ce65c5dfeb820457072a1a9a41cf"
      }
    }
    axios
      .post("https://lambdamud-be.herokuapp.com/api/adv/move/", {
        direction: direction
      }, reqOptions)
      .then(res => {
        this.setState({
          player: {
            row: res.data.row,
            column: res.data.column
          }
        })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return(
      <div>
        <GameTitle />
        <div className="game_container">
          <GameBoard player={this.state.player}/>
          <GameInfo movePlayer={this.movePlayer}/>
        </div>

      </div>
    )
  }
}

export default Game;
