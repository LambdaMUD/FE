import React from "react";

import {
    Key,
    MainContainer,
    BottomContainer,
    Header
} from "./playerStyles.js";

class PlayerController extends React.Component{
    componentWillMount(){
        document.addEventListener("keypress", this._handleKeyPress)
    }

    componentWillUnmount(){
        document.removeEventListener("keypress", this._handleKeyPress)
    }

    _handleKeyPress = e => {
        if(e.key === "w"){
            console.log("move up")
        }else if(e.key === "a"){
            console.log("move left")
        }else if(e.key === "s"){
            console.log("move down")
        }else if(e.key === "d"){
            console.log("move right")
        }
    }

    render(){
        return(
            <>
                <Header>
                Click to move any direction or use W A S D
                </Header>
                <MainContainer>
                    <Key onClick={() => this._handleKeyPress({key: "w"})}>
                        <i className="fas fa-arrow-up"/>
                    </Key>
                    <BottomContainer>
                        <Key onClick={() => this._handleKeyPress({key: "a"})}>
                            <i className="fas fa-arrow-left"/>
                        </Key>
                        <Key onClick={() => this._handleKeyPress({key: "s"})}>
                            <i className="fas fa-arrow-down"/>
                        </Key>
                        <Key onClick={() => this._handleKeyPress({key: "d"})}>
                            <i className="fas fa-arrow-right"/>
                        </Key>
                    </BottomContainer>
                </MainContainer>
            </>
        )
    }
}

export default PlayerController;