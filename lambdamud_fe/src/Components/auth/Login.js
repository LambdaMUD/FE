import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Card style={{ width: "70%" }} className='Register'>
      <Card.Header as='h5'>Login</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>User Name</Form.Label>
            <Form.Control name='username' type='text' placeholder='Enter your user name' />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control name='password1' type='password' placeholder='Password' />
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
