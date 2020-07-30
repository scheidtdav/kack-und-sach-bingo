import React, { useState } from 'react'
import './GameboardCell.css'

export default function GameboardCell({content}) {
    const [ isChecked, checkState ] = useState(false);
    const onCellClicked = () => {
        checkState(!isChecked);
    }

return(
    <td onClick={onCellClicked} className={isChecked ? "checked" : "unchecked"}>
        <div>{content}</div>
    </td>
)
}