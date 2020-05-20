import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="Menu">
      <Link className="menuLink" to="/game/2">
        Square 2 x 2
      </Link>
      <Link className="menuLink" to="/game/4">
        Square 4 x 4
      </Link>
      <Link className="menuLink" to="/game/9">
        Square 9 x 9
      </Link>
      <Link className="menuLink" to="/game/16">
        Square 16 x 16
      </Link>
    </div>
  );
}
