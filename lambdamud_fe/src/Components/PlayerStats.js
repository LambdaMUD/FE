import React from 'react';
import ChooseCharacter from './ChooseCharacter';


class PlayerStats extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="player_stats_container">
        <h1> Choose a character </h1>
        <ChooseCharacter chooseCharacter={this.props.chooseCharacter} />
      </div>
    )
  }
}

export default PlayerStats;
