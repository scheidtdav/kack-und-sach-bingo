import React from "react";
import { Grid, Main } from "grommet";

import GameboardCell from "./GameboardCell";

export default function Gameboard({ data }) {
  const myOnClick = () => {
    console.log("Clicked");
  };

  return (
    <Main>
      <Grid
        justifyContent="stretch"
        fill="vertical"
        columns={[
          ["xxsmall", "medium"],
          ["xxsmall", "medium"],
          ["xxsmall", "medium"],
          ["xxsmall", "medium"],
          ["xxsmall", "medium"],
        ]}
        gap="small"
      >
        {data.map((cell) => {
          return <GameboardCell content={cell} onClick={myOnClick} />;
        })}
      </Grid>
    </Main>
  );
}
