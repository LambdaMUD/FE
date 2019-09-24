import React from 'react';
import styled from 'styled-components';
import fullImage from '../public/images/full_sprite.png';

const ImageSprite = styled.div`
  position: relative;
  background: url(${fullImage}) -64px 0;
  left: 32px;
  width: 32px;
  height: 32px;
  border: 1px solid black;
`;

const AnotherSprite = styled.div`
  position: relative;
  background: url(${fullImage}) 228px 0;
  left: 32px;
  width: 32px;
  height: 32px;
  border: 1px solid black;
`;

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
        <ImageSprite />
        <AnotherSprite />
      </div>
    )
  }
}

export default GameBoard;
