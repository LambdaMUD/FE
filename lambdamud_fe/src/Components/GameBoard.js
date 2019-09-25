import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import grass from '../public/images/green_grass.png';
import brick from '../public/images/grey_brick.png';
import golem from '../public/images/Characters/wizard.png';


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

  border: 2px solid;
  text-align: center;
  width: 75px;
  height: 75px;

`;
class GameBoard extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      mazeInfo: [],
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
    console.log("player", this.state.player)
    const { rows, columns, maze } = this.state.mazeInfo;
    const mazeRows = [];
    for (let i = 0; i < rows; i++) {
      let rowFiltered = maze.filter(room => room.row === i)
      rowFiltered.sort((a,b) => a.column - b.column)
      mazeRows.push(rowFiltered);
    }
    console.log(this.state.mazeInfo.rows)
    console.log(this.state.mazeInfo.columns)
    return(
      <Container>

      {mazeRows.map(r => (
        <Row>
          {r.map(room => {
            console.log(room)
            return (<div>
              {this.props.player && this.props.player.row === room.row && this.props.player.column === room.column ? (
                <Room
                  className={(room.wall_n ? "north" : "")+ (room.wall_s ? "south" : "")+ (room.wall_e ? "east" : "") + (room.wall_w ? "west" : "") + " room "}
                  id={(room.row === 9 ? "end": "")+(room.colum===9 ? "column": "")}
                  north={room.wall_n}
                  south={room.wall_s}
                  east={room.wall_e}
                  west={room.wall_w}
                  player>
                  <img src={golem} />
                </Room>
              ) : (
                <Room
                  className={(room.wall_n ? "north" : "")+ (room.wall_s ? "south" : "")+ (room.wall_e ? "east":"")+ (room.wall_w ? "west" : "")+ " room " + (room.row === 10? "end": "")+(room.column === 10 ? "room" : "")}
                  id={(room.row === 9? "end": "")+(room.column ===9 ? "room": "")}
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
