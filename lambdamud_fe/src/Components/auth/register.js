import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";

const Register = props => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [ErrorText, setErrorText] = useState("");

  const registerHandler = event => {
    event.preventDefault();
    const newUser = {
      username,
      password1,
      password2
    };
    console.log("Adding user: ", newUser);
    addUser(newUser);
  };

  const addUser = user => {
    const endpoint = "https://lambdamud-be.herokuapp.com/api/registration/";
    axios
      .post(endpoint, user)
      .then(response => {
        console.log(response.data);
        setUsername("");
        setPassword1("");
        setPassword2("");
        setErrorText("");
        props.history.push("/login");
      })
      .catch(error => {
        console.log(error.response.data);
        const errors = Object.keys(error.response.data);
        let message = "";
        if (errors[0]) {
          if (errors[0] !== "non_field_errors") message = errors[0] + " : " + error.response.data[errors[0]];
          else message = error.response.data[errors[0]];
          setErrorText(message);
        }
        props.history.push("/register");
      });
  };

  return (
    <>
      {ErrorText && <div>{ErrorText}</div>}
      <Card style={{ width: "70%" }} className='Register'>
        <Card.Header as='h5'>Register</Card.Header>
        <Card.Body>
          <Form onSubmit={registerHandler}>
            <Form.Group controlId='formBasicText'>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your user name'
                name='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword1'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password1'
                value={password1}
                onChange={e => setPassword1(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword2'>
              <Form.Label>Password Again</Form.Label>
              <Form.Control
                type='password'
                placeholder='Type Password again'
                name='password2'
                value={password2}
                onChange={e => setPassword2(e.target.value)}
              />
              <Form.Text className='text-muted'>The passwords have to match.</Form.Text>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Register;
