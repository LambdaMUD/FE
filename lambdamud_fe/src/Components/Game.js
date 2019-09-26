import React from "react";
import axios from "axios";
import GameTitle from "./GameTitle";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";

import config from "../Config/index";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      mazeInfo: [],
      players: [],
      player: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("authToken");
    if (!token) this.props.history.push(`/login`);
    console.log("token: ", token);
    console.log(`token ${token}`);
    // Authorization: "token 01b1d850b901ce65c5dfeb820457072a1a9a41cf"
    const reqOptions = {
      headers: {
        Authorization: `token ${token}`
      }
    };
    axios
      .post(
        `${config.baseURL}/make_maze/`,
        {
          rows: 10,
          columns: 10
        },
        reqOptions
      )
      .then(response => {
        console.log(response.data);
        axios
          .get(`${config.baseURL}/adv/reset/`, reqOptions)
          .then(res => {
            console.log(res);
            this.setState({
              mazeInfo: response.data,
              player: {
                row: res.data.row,
                column: res.data.column
              },
              players: res.data.players
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
  movePlayer = direction => {
    const token = localStorage.getItem("authToken");
    if (!token) this.props.history.push(`/login`);
    const reqOptions = {
      headers: {
        // Authorization: "token 01b1d850b901ce65c5dfeb820457072a1a9a41cf"
        Authorization: `token ${token}`
      }
    };
    axios
      .post(
        `${config.baseURL}/adv/move/`,
        {
          direction: direction
        },
        reqOptions
      )
      .then(res => {
        this.setState({
          player: {
            row: res.data.row,
            column: res.data.column
          },
          players: res.data.players
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <GameTitle />
        <div className='game_container'>
          <GameBoard mazeInfo={this.state.mazeInfo} player={this.state.player} />
          <GameInfo movePlayer={this.movePlayer} players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default Game;
