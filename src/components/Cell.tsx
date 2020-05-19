import React from 'react';
import '../css/Cell.css';

export default function Cell(props: {
  value: number;
  isLocked: boolean;
  onClick: any;
}) {
  var value = props.value;
  const isLocked = props.isLocked;

  if (isLocked) {
    value = value * -1;
  }

  return (
    <div
      className={isLocked ? 'locked-cell' : 'cell light-cell'}
      onClick={isLocked ? null : props.onClick}
    >
      <span>{value === 0 ? '' : value}</span>
    </div>
  );
}
