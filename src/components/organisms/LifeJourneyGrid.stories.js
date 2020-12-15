import React from "react";
import { LifeJourneyGrid } from "./LifeJourneyGrid";

export default {
  title: "Components/Organisms/LifeJourneyGrid",
  component: LifeJourneyGrid,
};

const Template = (args) => <LifeJourneyGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  lifeJourneys: [
    {
      lifeJourneyId: "some-id-1",
      lifeJourneyTitle: "Some Title 1",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-2",
      lifeJourneyTitle: "Some Title 2",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-3",
      lifeJourneyTitle: "Some Title 3",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-4",
      lifeJourneyTitle: "Some Title 4",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-5",
      lifeJourneyTitle: "Some Title 5",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-6",
      lifeJourneyTitle: "Some Title 6",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-7",
      lifeJourneyTitle: "Some Title 7",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-8",
      lifeJourneyTitle: "Some Title 8",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-9",
      lifeJourneyTitle: "Some Title 9",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
    {
      lifeJourneyId: "some-id-10",
      lifeJourneyTitle: "Some Title 10",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
  ],
};

export const OneItem = Template.bind({});
OneItem.args = {
  lifeJourneys: [
    {
      lifeJourneyId: "some-id-1",
      lifeJourneyTitle: "Some Title 1",
      lifeJourneyDescription:
        "Some description about a particular life journey. It is long so it will be truncated",
    },
  ],
};
