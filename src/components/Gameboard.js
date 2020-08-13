import React from "react";
import { Box } from "rebass";

import GameboardCell from "./GameboardCell";

export default function Gameboard({ data }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridGap: 4,
        gridTemplateColumns: "repeat(auto-fit, minmax(36px, 1fr))",
      }}
    >
      {data.map((cell) => {
        return <GameboardCell content={cell} />;
      })}
    </Box>
  );
}
