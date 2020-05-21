import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="Menu">
      <GameLink size={2}>Square 2 x 2</GameLink>
      <GameLink size={4}>Square 4 x 4</GameLink>
      <GameLink size={9}>Square 9 x 9</GameLink>
      <GameLink size={16}>Square 16 x 16</GameLink>
    </div>
  );
}

interface GameLinkProps {
  size: number;
  children: string;
}

const GameLink = (props: GameLinkProps) => {
  return (
    <Link className="menuLink" to={`/game/${props.size}`}>
      {props.children}
    </Link>
  );
};
