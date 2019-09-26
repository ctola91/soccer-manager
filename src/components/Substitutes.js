import React from "react";
import { connect } from "react-redux";

const Substitutes = ({ substitutes, deleteSubstitute }) => (
  <section>
    <h2>Substitutes</h2>
    <div className="field">
      {substitutes.map(player => (
        <article className="main-player" key={player.id}>
          <div>
            <img src={player.photo} alt={player.name} />
            <button onClick={() => deleteSubstitute(player)}>X</button>
          </div>
          <p>{player.name}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
    substitutes: state.substitutes
});

const mapDispatchToProps = dispatch => ({
    deleteSubstitute(player) {
        dispatch({
          type: "DELETE_SUBSTITUTE",
          player
        });
      }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Substitutes);
