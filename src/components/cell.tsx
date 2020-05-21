import React from "react";

export default function Cell(props: {
  value: number;
  size: number;
  style: string;
  onClick: any;
}) {
  var value = props.value;
  const style = props.style;
  const isLocked = value < 0;

  if (isLocked) {
    value = value * -1;
  }

  const fontSize = 16 / props.size;

  return (
    <div
      className={`cell ${style} ${isLocked ? "locked" : "default"}`}
      style={{ fontSize: `${fontSize}em` }}
      onClick={isLocked ? null : props.onClick}
    >
      <span>{value === 0 ? "" : value}</span>
    </div>
  );
}
