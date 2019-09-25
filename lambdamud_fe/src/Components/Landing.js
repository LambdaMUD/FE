import React from "react";
import {
    Castle,
    Body,
    LandingHeader,
    LandingText,
    Container
} from "./Custom/index"
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <Body>
            <Castle>
                <Container>
                    <LandingHeader>Lambda MUD</LandingHeader>
                    <Link to="/register">
                        <LandingText>Register</LandingText>
                    </Link>
                    <Link to="/login">
                        <LandingText>Login</LandingText>
                    </Link>
                </Container>
            </Castle>
        </Body>
    )
}

export default Landing;
