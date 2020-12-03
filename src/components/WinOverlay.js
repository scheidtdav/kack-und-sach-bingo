import React from "react";
import { RWebShare } from "react-web-share";
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
        <RWebShare
          data={{
            text:
              "Ich hab gerade beim Kack und Sach Bingo gewonnen! Auch Bock zu zocken?",
            url: "https://ksbingo.dscheidt.de",
            title: "Bingo!",
          }}
        >
          <Button>Teilen</Button>
        </RWebShare>
        <Button margin={{ vertical: "medium" }} onClick={() => newTry()}>
          Neuen Versuch starten
        </Button>
      </Box>
    </Layer>
  );
}
