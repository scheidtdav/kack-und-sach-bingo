import React from "react";
import { Layer, Box, Heading, Button } from "grommet";

export default function WinOverlay() {
  const newTry = () => {
    window.location.reload();
  };
  return (
    <Layer
      animation="fadeIn"
      onClickOutside={() => newTry()}
      onEsc={() => newTry()}
    >
      <Box pad="medium">
        <Heading textAlign="center">Bingo!</Heading>
        <Button margin={{ vertical: "medium" }} onClick={() => newTry()}>
          Neuen Versuch starten
        </Button>
      </Box>
    </Layer>
  );
}
