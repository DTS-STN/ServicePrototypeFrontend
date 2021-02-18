import React from "react";
import { ActionButton } from "../atoms/ActionButton";
import { ApplicationStep } from "../molecules/ApplicationStep";

export function ApplicationStatusCard() {
  const stepList = [
    {
      step: "Step 1",
      status: "Completed",
      description:
        "Your application was submitted and is going through a verification process",
      time: "Feb 5th 2021",
    },
    {
      step: "Step 2",
      status: "Current Step",
      description: 'Your application is currently on "Step 2"',
      time: "Feb 12th 2021",
    },
    {
      step: "Step 3",
      status: "Next Step",
      description:
        'After "Step 2" is completed your application will be verified',
      time: "Feb 25th 2021",
    },
    {
      step: "Step 4",
      status: "Final Completetion Date",
      description: "Your Application should be completed on March 2nd 2021",
      time: "Mar 2nd 2021",
    },
  ];
  const applicationSteps = [];
  for (let i = 0; i < stepList.length; i++) {
    const step = stepList[i];
    applicationSteps.push(
      <ApplicationStep
        stepNumber={step.step}
        stepStatus={step.status}
        stepDescription={step.description}
        date={step.time}
        key={step.step}
      />
    );
  }
  return (
    <div className="mt-8 px-4 rounded-lg shadow flex flex-col">
      <p className="py-4 text-xl font-bold">Status of "X" Application</p>
      <div className="flex-flex-col"></div>
      <div className="flex flex-row justify-end">
        <p className="w-1/6 text-lg">Time (approx) </p>
      </div>
      <div className="w-full">{applicationSteps}</div>
      <p className="mt-8">
        This information represents the most up to date status of your
        application. The estimated processing time of your application could
        change if additonal information is recieved.
      </p>
      <div>
        <ActionButton
          className="mx-auto mb-8 bg-bg-gray-dk text-white hover:bg-black"
          id="ViewApplicaton"
          text="View Application"
        ></ActionButton>
      </div>
    </div>
  );
}
