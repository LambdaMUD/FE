import React from 'react';
import golem from '../public/images/Characters/golem.png';
import enchantress from '../public/images/Characters/enchantress.png';
import female_warrior from '../public/images/Characters/female_warrior.png';
import knight from '../public/images/Characters/knight.png';
import wizard from '../public/images/Characters/wizard.png';

class ChooseCharacter extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      characterChosen: "wizard"
    }
  }

  chooseACharacter = (character) => {
    this.props.chooseCharacter(character)
    this.setState({
      characterChosen: character
    })
  }

  render(){
    return(
      <div className="character_container">
        <div>
          <img alt="golem" className={(this.state.characterChosen === "golem" ? "golem" : "") + " character"} onClick={() => this.chooseACharacter("golem")} src={golem}/>
          <img alt="enchantress" className={(this.state.characterChosen === "enchantress" ? "enchantress" : "") + " character"} onClick={() => this.chooseACharacter("enchantress")}src={enchantress} />
          <img alt="female warrior" className={(this.state.characterChosen === "female_warrior" ? "female_warrior" : "") + " character"} onClick={() => this.chooseACharacter("female_warrior")} src={female_warrior} />
          <img alt="knight" className={(this.state.characterChosen === "knight" ? "knight" : "") + " character"} onClick={() => this.chooseACharacter("knight")} src={knight} />
          <img alt="wizard" className={(this.state.characterChosen === "wizard" ? "wizard" : "") + " character"} onClick={() => this.chooseACharacter("wizard")} src={wizard} />
        </div>
      </div>
    )
  }
}

export default ChooseCharacter;
