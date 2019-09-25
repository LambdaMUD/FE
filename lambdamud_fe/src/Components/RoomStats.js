import React from "react";

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { players } = this.props;
    if (!players) players = [];
    return (
      <div className='player_stats_container'>
        <h1> Room Stats </h1>
        {players.length === 0 ? (
          <div>No players in this room.</div>
        ) : (
          <div>
            <p>Players in the Room</p>
            {players.map(player => (
              <div key={player.id}>{player}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PlayerStats;
