import React from "react";
import { Button } from "grommet";

export default function GameboardCell({ content, onTap }) {
  return <Button onClick={onTap}>{content}</Button>;
}
