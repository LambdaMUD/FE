import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Form } from "react-bootstrap";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = event => {
    event.preventDefault();
    logUser({ username, password });
  };

  const logUser = user => {
    const endpoint = "https://lambdamud-be.herokuapp.com/api/";
    axios.post(endpoint, user).then(response => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      props.history.push("/");
    });
  };
  return (
    <Card style={{ width: "70%" }} className='Register'>
      <Card.Header as='h5'>Login</Card.Header>
      <Card.Body>
        <Form onSubmit={loginHandler}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your user name'
              name='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password1'
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
