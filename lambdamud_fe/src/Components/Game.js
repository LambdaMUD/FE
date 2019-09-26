import React from "react";
import axios from "axios";
import GameTitle from "./GameTitle";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";
import {
  NavWrapper,
  NavSubmit,
  NavText
} from "./Custom/index";
import { Link } from "react-router-dom";
import config from "../Config/index";
<<<<<<< HEAD
=======
import golem from '../public/images/Characters/golem.png';
import enchantress from '../public/images/Characters/enchantress.png';
import female_warrior from '../public/images/Characters/female_warrior.png';
import knight from '../public/images/Characters/knight.png';
import wizard from '../public/images/Characters/wizard.png';

>>>>>>> a665eb880948fe5d7969af01ae65f09abf326d95

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      mazeInfo: [],
      players: [],
      player: null,
      chosenCharacter: wizard
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
        const mazeInfo = response.data
        axios
          .get(`${config.baseURL}/adv/reset/`, reqOptions)
          .then(res => {
            console.log("reset", res.data.row);
            this.setState({
              mazeInfo: mazeInfo,
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
        console.log("res", res)
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

  chooseCharacter = (character) => {
    switch(character){
      case "golem":
        this.setState({
          chosenCharacter: golem
        })
        break
      case "enchantress":
        this.setState({
          chosenCharacter: enchantress
        })
        break
      case "female_warrior":
        this.setState({
          chosenCharacter: female_warrior
        })
        break
      case "knight":
        this.setState({
          chosenCharacter: knight
        })
        break
      case "wizard":
        this.setState({
          chosenCharacter: wizard
        })
        break
      default:
        return
    }

  }
  render() {
    return (
      <div>
        <NavWrapper>
          <NavSubmit>
            <Link to="/login">
              <NavText> Logout </NavText>
            </Link>
          </NavSubmit>
        </NavWrapper>
        <GameTitle />
        <div className='game_container'>
          <GameBoard chosenCharacter={this.state.chosenCharacter} mazeInfo={this.state.mazeInfo} player={this.state.player} />
          <GameInfo chooseCharacter={this.chooseCharacter} movePlayer={this.movePlayer} players={this.state.players} />
        </div>
      </div>
    );
  }
}
export default Game;
