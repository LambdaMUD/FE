import React from 'react';
import styled from 'styled-components';
import grass from '../public/images/green_grass.png';
import brick from '../public/images/grey_brick.png';

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
  width: 200px;
  height: 200px;

`;
class GameBoard extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }

  componentDidMount() {

  }

  render(){
    const mazeInfo = {
    rows: 3,
    columns: 3,
    maze: [
      {
        row: 0,
        column: 0,
        wall_n: true,
        wall_s: true,
        wall_e: false,
        wall_w: true
      },
      {
        row: 0,
        column: 1,
        wall_n: true,
        wall_s: true,
        wall_e: false,
        wall_w: false
      },
      {
        row: 0,
        column: 2,
        wall_n: true,
        wall_s: false,
        wall_e: true,
        wall_w: false
      },
      {
        row: 1,
        column: 0,
        wall_n: true,
        wall_s: false,
        wall_e: false,
        wall_w: true
      },
      {
        row: 1,
        column: 1,
        wall_n: true,
        wall_s: true,
        wall_e: true,
        wall_w: false
      },
      {
        row: 1,
        column: 2,
        wall_n: false,
        wall_s: false,
        wall_e: true,
        wall_w: true
      },
      {
        row: 2,
        column: 0,
        wall_n: false,
        wall_s: true,
        wall_e: true,
        wall_w: true
      },
      {
        row: 2,
        column: 1,
        wall_n: true,
        wall_s: false,
        wall_e: false,
        wall_w: true
      },
      {
        row: 2,
        column: 2,
        wall_n: false,
        wall_s: true,
        wall_e: true,
        wall_w: false
      }
      ]
    };
    const { rows, columns, maze } = mazeInfo;
    const mazeRows = [];
    for (let i = 0; i < rows; i++) {
      mazeRows.push(maze.filter(room => room.row === i));
      console.log(mazeRows);
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
                  <h1> He's here</h1>
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
