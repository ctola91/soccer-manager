import React from "react";
import { connect } from "react-redux";

const MainPlayers = ({ mainPlayers, deleteMainPlayer }) => (
  <section>
    <h2>Main Players</h2>
    <div className="field">
      {mainPlayers.map(player => (
        <article className="main-player" key={player.id}>
          <div>
            <img src={player.photo} alt={player.name} />
            <button onClick={() => deleteMainPlayer(player)}>X</button>
          </div>
          <p>{player.name}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  mainPlayers: state.mainPlayers
});

const mapDispatchToProps = dispatch => ({
  deleteMainPlayer(player) {
    dispatch({
      type: "DELETE_MAIN_PLAYER",
      player
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPlayers);
