import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  Primary,
  NoNotifications,
  NoFetch,
  FailedFetch,
} from "./NotificationCard.stories";

it("renders Primary ", () => {
  render(<Primary {...Primary.args} />);
  for (let i in Primary.args.notificationsData) {
    let notification = Primary.args.notificationsData[i];
    let notificationTitle = screen.getByText(notification.title);
    let notificationMessage = screen.getByText(notification.messageText);
    expect(notificationTitle).toBeTruthy();
    expect(notificationMessage).toBeTruthy();
  }
});
it("renders NoNotificatons ", () => {
  const wrapper = render(<NoNotifications {...NoNotifications.args} />);
  const paragraphElement = wrapper.container.querySelector("#no-notifications");
  expect(paragraphElement).toBeTruthy();
});
it("renders NoFetch ", () => {
  const wrapper = render(<NoFetch {...NoFetch.args} />);
  const paragraphElement = wrapper.container.querySelector("#not-fetched");
  expect(paragraphElement).toBeTruthy();
});
it("renders FailedFetch ", () => {
  const wrapper = render(<FailedFetch {...FailedFetch.args} />);
  const paragraphElement = wrapper.container.querySelector("#failed-fetch");
  expect(paragraphElement).toBeTruthy();
});
