import React from "react";
import { ActionButton } from "../atoms/ActionButton";

export function BenefitFilter(prop) {
  return (
    <div>
      <p>{props.text}</p>
      <ActionButton text={props.eligibleBenefits} />
    </div>
  );
}
