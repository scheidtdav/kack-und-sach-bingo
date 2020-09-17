import React, { useState } from "react";
import { Grid, Main } from "grommet";

import GameboardCell from "./GameboardCell";

export default function Gameboard({ data }) {
  const [checkedValues, setCheckedValues] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleCell = (row, column) => {
    let currentValues = [...checkedValues];
    currentValues[column + 5 * row] = !currentValues[column + 5 * row];
    setCheckedValues(currentValues);
  };

  return (
    <Main
      overflow="auto"
      flex={true}
      pad={{ vertical: "small", horizontal: "xsmall" }}
    >
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
        {data.map((cell, index) => {
          return (
            <GameboardCell
              row={Math.floor(index / 5)}
              column={index % 5}
              key={index}
              onChanged={toggleCell}
              isChecked={checkedValues[index]}
            >
              {cell}
            </GameboardCell>
          );
        })}
      </Grid>
    </Main>
  );
}
