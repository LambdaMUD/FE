import React from 'react';

class GameBoard extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.font="30px Arial"
    ctx.fillText("Hello World", 100, 50)
  }

  render(){
    return(
      <div className="game_board_container">
        <h1> Game Board </h1>
        <canvas className="game_board" ref="canvas" width={600} height={600} />
      </div>
    )
  }
}

export default GameBoard;
