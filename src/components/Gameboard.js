import React from "react";
import { Box } from "grommet";

import GameboardCell from "./GameboardCell";

export default function Gameboard({ data }) {
  const myOnClick = () => {
    console.log("Clicked");
  };

  return (
    <Box>
      {data.map((cell) => {
        return <GameboardCell content={cell} onClick={myOnClick} />;
      })}
    </Box>
  );
}
