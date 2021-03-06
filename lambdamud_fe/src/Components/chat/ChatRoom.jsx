import React from "react";
import axios from "axios";
import Pusher from "pusher-js";

import { ChatContainer, InputContainer, Chat, Message } from "./chatStyles.js";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      messages: []
    };
  }

  componentDidMount() {
    this._setupPusher();
  }

  _setupPusher = () => {
    let pusher = new Pusher("4c9570b4ecf970337b18", {
      cluster: "us3"
    });

    let channel = pusher.subscribe("lambda-mud-channel");
    channel.bind("broadcast", msg => {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            ...msg
          }
        ]
      });
    });

    this.pusher = pusher;
    this.channel = channel;
  };

  _handleChangeInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  _submitMessage = e => {
    e.preventDefault();
    if (this.state.inputValue) {
      axios
        .post(
          `https://lambdamud-be.herokuapp.com/api/adv/say/`,
          { message: this.state.inputValue },
          {
            headers: {
              Authorization: `token ${localStorage.getItem("authToken")}`
            }
          }
        )
        .then(res => this.setState({ inputValue: "" }))
        .catch(err => console.log(`Error sending message: ${err}`));
    }
  };

  render() {
    const { inputValue, messages } = this.state;
    return (
      <ChatContainer>
        <Chat>
          {messages.map((m, i) => {
            return (
              <Message key={i} sent={this.props.username === m.username}>
                {m.username}: {m.message}
              </Message>
            );
          })}
        </Chat>
        <InputContainer>
          <input
            placeholder='Type a message'
            onChange={this._handleChangeInput}
            onSubmit={this._submitMessage}
            value={inputValue}
            name='inputValue'
          />
          <button onClick={this._submitMessage}>Send</button>
        </InputContainer>
      </ChatContainer>
    );
  }
}

export default ChatRoom;
