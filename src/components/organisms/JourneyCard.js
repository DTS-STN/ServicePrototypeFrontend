import React from "react";
import { useHistory } from "react-router-dom";
import { ActionButton } from "../atoms/ActionButton";
import imagePlaceHolder from "../../assets/images/imagePlaceholder.svg";

export function JourneyCard() {
  const history = useHistory();
  const redirectToJourneyPage = () => {
    history.push(`/lifejourney/`);
  };
  return (
    <div className="mt-8 rounded-lg shadow flex flex-row">
      <div className="p-4">
        <img alt="" src={imagePlaceHolder}></img>
      </div>
      <div className="p-4 mt-4 flex flex-col">
        <p className="text-2xl">
          You are in the prepare phase of the pregnancy journey
        </p>
        <p className="py-4">
          Congratulations on your upcoming baby! View the Journey page to get
          resources and information to help you in this stage
        </p>
        <ActionButton
          className="w-1/3 bg-bg-gray-dk text-white hover:bg-black"
          id="ViewJourney"
          text="View Journey"
          onClick={redirectToJourneyPage}
        ></ActionButton>
      </div>
    </div>
  );
}
