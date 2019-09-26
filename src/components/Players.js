import React from "react";
import { connect } from "react-redux";

const Players = ({ players, addMainPlayers, addSubstitute }) => (
  <section>
    <h2>Players</h2>
    <div className="container-players">
      {players.map(player => (
        <article className="player" key={player.id}>
          <img src={player.photo} alt={player.name} />
          <h3>{player.name}</h3>
          <div>
            <button onClick={() => addMainPlayers(player)}>Main</button>
            <button onClick={() => addSubstitute(player)}>Substitute</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateTopProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
    addMainPlayers: (player) => {
        dispatch({
            type: 'ADD_MAIN_PLAYER',
            player
        })
    },
    addSubstitute: (player) => {
        dispatch({
            type: 'ADD_SUBSTITUTE',
            player
        })
    }
});

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Players);
