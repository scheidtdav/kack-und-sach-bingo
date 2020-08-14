import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Flex, Box } from "rebass";

import theme from "./theme";
import data from "./sentences.json";

import Header from "./components/Header";
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
    <ThemeProvider theme={theme}>
      <Flex
        backgroundColor="background"
        flexDirection="column"
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="center"
        height="100vh"
        p={1}
      >
        <Box flex="0 1 auto">
          <Header />
        </Box>
        <Box flex="1 0 auto" fontSize={2}>
          <Gameboard data={shuffleArray(data.sentences).slice(0, 25)} />
        </Box>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
