import React from "react";
import { Layer, Box, Heading, Button, Paragraph } from "grommet";

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
        <Paragraph>
          Schnell! Drück auf Pause bei der Folge, schreib dir die Zeit auf und
          mess dich mit deinen Freunden!
        </Paragraph>
        <Button margin={{ vertical: "medium" }} onClick={() => newTry()}>
          Neuen Versuch starten
        </Button>
      </Box>
    </Layer>
  );
}
