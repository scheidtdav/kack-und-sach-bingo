import React from "react";
import styled from "styled-components";
import { Button, CheckBox } from "grommet";

const GameboardButton = styled(Button)`
  word-break: break-word;
`;

export default function GameboardCell({
  row,
  column,
  isChecked,
  onChanged,
  children,
}) {
  return (
    <CheckBox
      label={children}
      checked={isChecked}
      onChange={(event) => onChanged(row, column)}
    />
  );
}

//<GameboardButton onClick={(event) => onClick(row, column)} plain={checked}>
//      {children}
//  </GameboardButton>
