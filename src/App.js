import React from "react";
import { Grommet, Stack } from "grommet";

import theme from "./theme";
import data from "./sentences.json";

import AppHeader from "./components/AppHeader";
import Gameboard from "./components/Gameboard";

function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function App() {
  return (
    <Grommet theme={theme} full>
      <AppHeader />
      <Gameboard data={shuffleArray(data.sentences).slice(0, 25)} />
    </Grommet>
  );
}

export default App;
