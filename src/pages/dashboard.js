import React from "react";
import { Page } from "../components/organisms/Page";
import { ResourceGrid } from "../components/organisms/ResoursesGrid";
import { ProfileCard } from "../components/organisms/ProfileCard";
import { NotificationCard } from "../components/organisms/NotificationCard";
import { AppointmentCard } from "../components/organisms/AppointmentCard";
import { ServiceProvidersCard } from "../components/organisms/ServiceProvidersCard";
export function Dashboard() {
  return (
    <Page>
      <ProfileCard></ProfileCard>
      <NotificationCard></NotificationCard>
      <AppointmentCard></AppointmentCard>
      {/* <ResourceGrid header = "Recommended Resource" resources=/> */}
      <ServiceProvidersCard></ServiceProvidersCard>
    </Page>
  );
}
