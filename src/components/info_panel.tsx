import React from "react";
import { SolutionType } from "../types/puzzle";

interface InfoPanelProps {
  solutionType: SolutionType;
}

export default function InfoPanel(props: InfoPanelProps) {
  return (
    <div className={"infoPanel " + SolutionType[props.solutionType]}>
      <div className="info">{SolutionType[props.solutionType]}</div>
      <div>&#10004;</div>
    </div>
  );
}
