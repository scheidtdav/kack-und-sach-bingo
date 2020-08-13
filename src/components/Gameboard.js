import React from "react";
import GameboardRow from "./GameboardRow";

export default function Gameboard({ data }) {
  return (
    <table id="gamboard">
      <tbody>
        <GameboardRow rowItems={data.slice(0, 5)} />
        <GameboardRow rowItems={data.slice(5, 10)} />
        <GameboardRow rowItems={data.slice(10, 15)} />
        <GameboardRow rowItems={data.slice(15, 20)} />
        <GameboardRow rowItems={data.slice(20, 25)} />
      </tbody>
    </table>
  );
}
