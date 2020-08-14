import React from "react";
import { Box } from "rebass";

import GameboardCell from "./GameboardCell";

export default function Gameboard({ data }) {
  const myOnClick = () => {
    console.log("Clicked");
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridGap: 1,
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
        gridTemplateAreas: [
          ". . . . .",
          ". . . . .",
          ". . . . .",
          ". . . . .",
          ". . . . .",
        ],
      }}
    >
      {data.map((cell) => {
        return <GameboardCell content={cell} onClick={myOnClick} />;
      })}
    </Box>
  );
}
