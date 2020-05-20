import React from "react";

export default function Cell(props: {
  value: number;
  isLocked: boolean;
  size: number;
  onClick: any;
}) {
  var value = props.value;
  const isLocked = props.isLocked;

  if (isLocked) {
    value = value * -1;
  }

  const fontSize = 16 / props.size;

  return (
    <div
      className={isLocked ? "locked-cell" : "cell light-cell"}
      style={{ fontSize: `${fontSize}em` }}
      onClick={isLocked ? null : props.onClick}
    >
      <span>{value === 0 ? "" : value}</span>
    </div>
  );
}
