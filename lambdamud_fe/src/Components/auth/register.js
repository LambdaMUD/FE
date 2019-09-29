import React, { useState } from "react";
import axios from "axios";
import { Form, FormInput, FormSubmit, FormText, FormLabel, FormHeader, Background, Body } from "../Custom/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

/**
 * Register allows a user to register for a new account
 * Sends a credentials object to the API with username, password1, and password2, where password1 and password2 should match
 * Awaits an object response from API with a key to set to user's localStorage, to verify they are a valid registered user
 */

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
        localStorage.setItem("authToken", response.data.key);
        setUsername("");
        setPassword1("");
        setPassword2("");
        setErrorText("");
        props.history.push("/gameboard");
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
      <Body>
        <Background>
          <Form onSubmit={registerHandler}>
            <FormHeader>Lambda MUD</FormHeader>

            <FormLabel name='User Name'>
              <FontAwesomeIcon icon={faUserCircle} />
              <FormInput
                type='text'
                placeholder='Username'
                name='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </FormLabel>

            <FormLabel name='Password1'>
              <FontAwesomeIcon icon={faLock} />
              <FormInput
                type='password'
                placeholder='Password'
                name='password1'
                value={password1}
                onChange={e => setPassword1(e.target.value)}
              />
            </FormLabel>

            <FormLabel name='Password2'>
              <FontAwesomeIcon icon={faLock} />
              <FormInput
                type='password'
                placeholder='Re-enter Password'
                name='password2'
                value={password2}
                onChange={e => setPassword2(e.target.value)}
              />
            </FormLabel>

            <FormSubmit type='submit'>Register</FormSubmit>
            <Link to='/login'>
              <FormText>Already a MUDDER?</FormText>
            </Link>
          </Form>
        </Background>
      </Body>
    </>
  );
};

export default Register;
