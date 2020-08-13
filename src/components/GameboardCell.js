import React, { useState } from "react";
import { Text } from "rebass";

export default function GameboardCell({ content }) {
  const [isChecked, checkState] = useState(false);
  const onCellClicked = () => {
    checkState(!isChecked);
  };

  return <Text>{content}</Text>;
}
