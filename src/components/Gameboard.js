import React, { useState } from "react";
import { Grid, Main } from "grommet";

import GameboardCell from "./GameboardCell";
import WinOverlay from "./WinOverlay";

export default function Gameboard({ data }) {
  const [isWin, setIsWin] = useState(false);
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

  const itemAt = (values, row, column) => {
    return values[column + 5 * row];
  };

  const checkWin = (values) => {
    let isWin = false;
    // Check all rows and columns plus the two diagonals
    // Use true as the start value, since we are using
    // &= below, which turns it to false as soon as there
    // is one false value
    let diagonalWin1 = true;
    let diagonalWin2 = true;
    for (let i = 0; i < 5; i++) {
      diagonalWin1 &= itemAt(values, i, i);
      diagonalWin2 &= itemAt(values, 4 - i, i);

      let rowWin = true;
      let columnWin = true;
      for (let j = 0; j < 5; j++) {
        rowWin &= itemAt(values, i, j);
        columnWin &= itemAt(values, j, i);
      }
      if (rowWin || columnWin) {
        isWin = true;
        break;
      }
    }

    if (diagonalWin1 || diagonalWin2) isWin = true;

    return isWin;
  };

  const toggleCell = (row, column) => {
    let currentValues = [...checkedValues];
    currentValues[column + 5 * row] = !currentValues[column + 5 * row];
    if (checkWin(currentValues)) {
      setIsWin(true);
    }
    setCheckedValues(currentValues);
  };

  return (
    <Main
      overflow="auto"
      flex={true}
      pad={{ vertical: "small", horizontal: "xsmall" }}
    >
      {isWin && <WinOverlay />}
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
