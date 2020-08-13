import React, { useState } from "react";
import { Button } from "rebass";

export default function GameboardCell({ content }) {
  const [isChecked, checkState] = useState(false);
  const onCellClicked = () => {
    checkState(!isChecked);
  };

  return (
    <Button p={0} variant="outline" textAlign="center">
      {content}
    </Button>
  );
}
