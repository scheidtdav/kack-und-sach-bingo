import React, { useState } from "react";
import { Button } from "grommet";

export default function GameboardCell({ content, onTap }) {
  return (
    <Button primary onClick={onTap}>
      {content}
    </Button>
  );
}
