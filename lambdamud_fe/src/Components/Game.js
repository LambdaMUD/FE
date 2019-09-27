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
import golem from '../public/images/Characters/golem.png';
import enchantress from '../public/images/Characters/enchantress.png';
import female_warrior from '../public/images/Characters/female_warrior.png';
import knight from '../public/images/Characters/knight.png';
import wizard from '../public/images/Characters/wizard.png';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      mazeInfo: [],
      players: [],
      player: null,
      chosenCharacter: wizard,
      finished: false,
      openModal: false
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
                column: res.data.column,
                username: res.data.name
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

  openModal = () => {
    this.setState({
      openModal: true
    })
  }

  closeModal = () => {
    this.setState({
      openModal: false
    })
  }

  checkEnd = () => {
    if (this.state.player.row === 9 && this.state.player.column === 9){
      this.setState({
        finished: true,
        openModal: true
      })
    } else {
      return
    }
  }
  movePlayer = direction => {
    const token = localStorage.getItem("authToken");
    if (!token) this.props.history.push(`/login`);
    const reqOptions = {
      headers: {
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
        this.checkEnd()
        console.log("player", res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  tryAgain = () => {
    const token = localStorage.getItem("authToken");
    if (!token) this.props.history.push(`/login`);
    const reqOptions = {
      headers: {
        Authorization: `token ${token}`
      }
    };
    axios
      .get(`${config.baseURL}/adv/reset/`, reqOptions)
      .then(res => {
        this.setState({
          player: {
            row: res.data.row,
            column: res.data.column
          },
          players: res.data.players,
          openModal: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  newLevel = () => {
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
              players: res.data.players,
              openModal: false
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
    console.log(this.state.player)
    return (
      <div>
        <Modal show={this.state.openModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Choose An Option</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Button className="buttons" variant="primary" onClick={this.newLevel}>
            New Level
          </Button>
          <Button className="buttons" variant="primary" onClick={this.tryAgain}>
            Try Again
          </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <NavWrapper>
          <NavSubmit>
            <Link to="/login">
              <NavText> Logout </NavText>
            </Link>
          </NavSubmit>
        </NavWrapper>
        <GameTitle />
        <div className='game_container'>
          <GameBoard
          chosenCharacter={this.state.chosenCharacter} mazeInfo={this.state.mazeInfo}
          player={this.state.player}
          finished={this.state.finished} />
        <GameInfo chooseCharacter={this.chooseCharacter} movePlayer={this.movePlayer} players={this.state.players} username={this.state.player && this.state.player.username ? this.state.player.username : ""} />
        </div>
      </div>
    );
  }
}
export default Game;
