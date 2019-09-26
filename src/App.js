import React from "react";
import { Provider } from "react-redux";
import store from './store';

import './styles/styles.scss';

import Players from "./components/Players";
import TeamSelected from "./components/TeamSelected";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Soccer Manager</h1>
      <Players />
      <TeamSelected />
    </main>
  </Provider>
);

export default App;
