import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-family: sans-serif;
  width: 360px;
  height: 360px;
  border: 1px solid gainsboro;
  margin: 15px;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 320px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border-top: 1px solid gainsboro;
  input{
    width: 80%;
    border: unset;
    padding: 5px 10px;
  }
  button{
    width: 20%;
    border: unset;
    background: black;
    color: white;
  }
`;

export const Message = styled.div`
  justify-self: flex-end;
  align-self: ${props => props.sent ? "flex-end" : "flex-start"};
  padding: 6px;
  border-radius: ${props => props.sent ? "16px 2px 16px 16px" : "2px 16px 16px 16px"};
  max-width: 65%;
  border: 1px solid gainsboro;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.05);
  margin: ${props => props.sent ? "15px 15px 0 0" : "15px 0 0 15px"};
  background: ${props => props.sent ? "white" : "gainsboro"};
`;