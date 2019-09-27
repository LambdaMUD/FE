import React, { Component } from "react";
import config from "../../Config/index";
import {
    Form,
    FormInput,
    FormSubmit,
    FormText,
    FormLabel,
    FormHeader,
    Background,
    Body
} from "../Custom/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            loading: false
        };
    }

    inputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password
        };

        this.setState({
            loading: true
        });

        config
            .post(`${config.baseURL}/`, credentials)
            .then(res => {
                localStorage.setItem("authToken", res.data.token);
                this.setState({
                    username: "",
                    password: "",
                    loading: false
                });
                this.props.history.push(`/gameboard`);
            })
            .catch(err => {
                console.log(err.response);
            });
    };

    render() {
        return (
            <Body>
                <Background>
                    <Form onSubmit={this.submitHandler}>
                        <FormHeader>Lambda MUD</FormHeader>

                        <FormLabel name="username">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <FormInput
                                onChange={this.inputHandler}
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                            />
                        </FormLabel>

                        <FormLabel name="password">
                            <FontAwesomeIcon icon={faLock} />
                            <FormInput
                                onChange={this.inputHandler}
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                            />
                        </FormLabel>

                        <FormSubmit type="submit" disabled={!this.state.password}>
                            Login
                        </FormSubmit>

                        <Link to="/register">
                            <FormText>Register to become a MUDDER</FormText>
                        </Link>
                    </Form>
                </Background>
            </Body>
        );
    }
}

export default Login
