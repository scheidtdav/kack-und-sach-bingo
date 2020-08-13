import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Flex, Box, Image, Button, Text } from "rebass";

import Gameboard from "./components/Gameboard";
import kacki from "./kacki.png";
import data from "./sentences.json";

const theme = {
  fontSizes: [8, 10, 12, 16, 20, 25, 32, 40, 48],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    primary: "#ffffff",
  },
  buttons: {
    primary: {
      fontSize: 3,
      color: "#000000",
      bg: "primary",
    },
    outline: {
      variant: "buttons.primary",
      bg: "transparent",
      border: "1px solid #000000",
    },
  },
};

function shuffleArray(arr) {
  return arr;
}

function App() {
  const onRetryClick = () => {
    console.log("Retry pressed");
  };

  return (
    <ThemeProvider theme={theme}>
      <Flex
        flexDirection="column"
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        height="100vh"
        sx={{
          p: 1,
        }}
      >
        <Box flex="0 1 auto">
          <Image src={kacki} sx={{ maxHeight: "3rem" }} alt="Kacki" />
        </Box>
        <Box flex="1 0 auto" fontSize={2}>
          <Gameboard data={shuffleArray(data.sentences).slice(0, 25)} />
        </Box>
        <Box flex="0 1 auto">
          <Button onClick={onRetryClick}>Neu starten</Button>
        </Box>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
