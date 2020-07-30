import React from 'react';
import GameboardCell from './GameboardCell';

export default function GameboardRow({rowItems}) {
return (
    <tr>
        {rowItems.map((rowItem) => 
            <GameboardCell content={rowItem} />
        )}
    </tr>
);
}
