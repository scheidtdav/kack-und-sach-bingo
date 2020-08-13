import React, { useState } from "react";

export default function GameboardCell({ content }) {
  const [isChecked, checkState] = useState(false);
  const onCellClicked = () => {
    checkState(!isChecked);
  };

  return (
    <td onClick={onCellClicked} className={isChecked ? "checked" : "unchecked"}>
      <div>{content}</div>
    </td>
  );
}
