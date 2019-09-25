import styled from "styled-components";
import img from "./Background.jpg";
import castle from "./Castle.jpg"


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    align-self: center;
    magrin: 0 auto;
`;

export const FormInput = styled.input`
    border: none;
    padding-left: 2em;
    height: 1.5em;
    font-size: 1em;
    width: 70%;
    font-family: 'Saira Stencil One', cursive;
    background-color: #99b9e0;
    padding-top: 0.3em;
`;

export const FormLabel = styled.label`
    width: 50%;
    height: 3em;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 5.5em;
    margin-bottom: 3em;
`;

export const FormSubmit = styled.button`
  cursor: pointer;
  width: 25%;
  height: 2.5em;
  border-radius: 50px;
  font-size: 1em;
  font-weight: bold;
  background-color: #8d7e7f;
  border: 1px solid #3d3832;
  color: #e4ebe5;
  font-family: "Saira Stencil One", cursive;
  &:hover {
    box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.35);
    transition: box-shadow 0.1s ease-in-out;
  }
`;

export const FormText = styled.p`
    color: #bac0ca;
    font-size: 1em;
    margin-top: 1.5em;
    font-family: "Saira Stencil One", cursive;
`;

export const FormHeader = styled.h1`
    color: #808080;
    font-family: "Saira Stencil One", cursive;
    font-size: 3.5em;
    margin-bottom: 1.2em;
    margin-top: 1.2em;
`;

export const FormBackground = styled.div`
    width: 50%;
    max-height: 70vh;
    margin-top: 5em;
    padding-top: 2em;
`;

export const Background = styled.div`
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 10px 20px 80px 10px gray inset, -10px -20px 80px 10px gray inset;
    display: flex;
    justify-content: center;
    opacity: 0.8;

    @media (min-width: 600px) {
        min-width: 100vw;
        max-width: 1080px;
        height: 100vh;
        box-shadow: 60px 20px 45px 10px gray inset,
            -60px -20px 45px 10px gray inset;
    }

    @media (min-width: 1000px) {
        min-width: 1000px;
        max-width: 1080px;
        box-shadow: 120px 15px 75px 10px gray inset,
            -150px -20px 75px 10px gray inset;
    }
`;

export const Body = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: auto;
`;


export const NavWrapper = styled.nav`
    border: 1px solid white;
    width: 957.86px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    img {
        object-fit: contain;
    }
`;

export const Castle = styled.div`
    background-image: url(${castle});
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 10px 20px 80px 10px gray inset, -10px -20px 80px 10px gray inset;
    display: flex;
    justify-content: center;
    opacity: 0.8;

    @media (min-width: 600px) {
        min-width: 100vw;
        max-width: 1080px;
        height: 100vh;
        box-shadow: 60px 20px 45px 10px gray inset,
            -60px -20px 45px 10px gray inset;
    }

    @media (min-width: 1000px) {
        min-width: 1000px;
        max-width: 1080px;
        box-shadow: 120px 15px 75px 10px gray inset,
            -150px -20px 75px 10px gray inset;
    }
`;

export const LandingHeader = styled.h1`
    color: #808080;
    font-family: "Saira Stencil One", cursive;
    font-size: 3.5em;
    height: 1.5em;
    margin: 67.2px 0;
`;

export const LandingText = styled.p`
    color: #bac0ca;
    font-size: 20px;
    font-family: "Saira Stencil One", cursive;
    display: flex;
    flex-direction: column;
    flex-warap: wrap;
    width: 100px;
    height: 50px;
    margin: 0 auto;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`;





