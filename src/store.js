import { createStore } from "redux";

const initialState = {
  players: [
    {
      id: 1,
      name: "John Perez",
      photo: "https://api.adorable.io/avatars/285/1"
    },
    {
      id: 2,
      name: "Juan Perez",
      photo: "https://api.adorable.io/avatars/285/2"
    },
    {
      id: 3,
      name: "James Jonah Jameson",
      photo: "https://api.adorable.io/avatars/285/3"
    }
  ],
  mainPlayers: [],
  substitutes: []
};

const trainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MAIN_PLAYER":
      return {
        ...state,
        mainPlayers: state.mainPlayers.concat(action.player),
        players: state.players.filter(player => player.id !== action.player.id)
      };
    case "ADD_SUBSTITUTE":
      return {
        ...state,
        substitutes: state.substitutes.concat(action.player),
        players: state.players.filter(player => player.id !== action.player.id)
      };
    case "DELETE_MAIN_PLAYER":
      return {
        ...state,
        mainPlayers: state.mainPlayers.filter(
          player => player.id !== action.player.id
        ),
        players: state.players.concat(action.player)
      };
    case "DELETE_SUBSTITUTE":
      return {
        ...state,
        substitutes: state.substitutes.filter(
          player => player.id !== action.player.id
        ),
        players: state.players.concat(action.player)
      };
    default:
      break;
  }

  return state;
};

export default createStore(trainerReducer);
