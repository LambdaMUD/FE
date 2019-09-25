import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import grass from '../public/images/green_grass.png';
import brick from '../public/images/grey_brick.png';
import golem from '../public/images/Characters/golem.png';

export const Container = styled.div`
  margin-top: 100px;
  width: 80%;
  border: apx solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Row = styled.div`
  display: flex;
`;
export const Room = styled.div`
  background-image: url(${grass});
  border: 2px solid;
  text-align: center;
  width: 75px;
  height: 75px;

`;
class GameBoard extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      mazeInfo: []
    }
  }

  componentDidMount() {
    axios
      .post("https://lambdamud-be.herokuapp.com/api/make_maze/", {
        "rows": 10,
        "columns": 10
      })
      .then(res => {
        console.log(res.data)
        this.setState({
          mazeInfo: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    const { rows, columns, maze } = this.state.mazeInfo;
    const mazeRows = [];
    for (let i = 0; i < rows; i++) {
      let rowFiltered = maze.filter(room => room.row === i)
      rowFiltered.sort((a,b) => a.column - b.column)
      mazeRows.push(rowFiltered);
    }

  const player = { row: 0, column: 0 };
    return(
      <Container>
      {mazeRows.map(r => (
        <Row>
          {r.map(room => {
            return (<div>
              {player.row === room.row && player.column === room.column ? (
                <Room
                  className={(room.wall_n ? "north" : "")+ (room.wall_s ? "south" : "")+ (room.wall_e ? "east" : "") + (room.wall_w ? "west" : "")}
                  north={room.wall_n}
                  south={room.wall_s}
                  east={room.wall_e}
                  west={room.wall_w}
                  player>
                  <img src={golem} />
                </Room>
              ) : (
                <Room
                  className={(room.wall_n ? "north" : "")+ (room.wall_s ? "south" : "")+ (room.wall_e ? "east" : "")+ (room.wall_w ? "west" : "")}
                  north={room.wall_n}
                  south={room.wall_s}
                  east={room.wall_e}
                  west={room.wall_w} />
              )}
            </div>
          )}
        )}
        </Row>
      ))}
    </Container>
    )
  }
}

export default GameBoard;
