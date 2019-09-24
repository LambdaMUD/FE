import styled from "styled-components"

export const Header = styled.h2`
  font-size: 19px;
  margin-top: 10px;
  font-weight: 500;
`

export const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 2px solid black;
  margin: 2px;
  font-size: 25px;
  background: white;
  cursor: pointer;
  transition: .2s;
  box-shadow: 0px 0px 0px rgba(0,0,0,0);
  &:hover{
    transform: translateY(-1px);
    box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
  }
  &:active{
    background: black;
    color: white;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const BottomContainer = styled.div`
  display: flex;
`;

