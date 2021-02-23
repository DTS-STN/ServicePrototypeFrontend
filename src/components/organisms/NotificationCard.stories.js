import React from "react";
import { NotificationCard } from "./NotificationCard";

export default {
  title: "Components/Organisms/NotificationCard",
  component: NotificationCard,
};

const Template = (args) => <NotificationCard {...args} />;

export const Primary = Template.bind({});
export const NoNotifications = Template.bind({});
export const NoFetch = Template.bind({});
Primary.args = {
  gotNotifications: true,
  notificationsData: [
    {
      effectiveDate: "some-date-2021-02-23",
      effectiveDateDescription: "some-description",
      isRichText: false,
      messageIcon: "some-icon-/ua/icons/2126",
      messageText: "some-text",
      messageType: {
        tableName: "some-table-name",
        value: "some-value",
        description: "some-description",
      },
      description: "some-description",
      tableName: "some-table-name",
      value: "some-value",
      title: "some-title",
    },
  ],
};
NoNotifications.args = {
  gotNotifications: true,
  notificationsData: [],
};
NoFetch.args = {
  gotNotifications: false,
  notificationsData: [],
};
