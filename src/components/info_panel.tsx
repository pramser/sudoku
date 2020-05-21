import React from "react";

export default function InfoPanel(props: { solutionType: any }) {
  return (
    <div className={"infoPanel " + props.solutionType}>
      <div className="info">{props.solutionType.toString().toUpperCase()}</div>
      <div>&#10004;</div>
    </div>
  );
}
