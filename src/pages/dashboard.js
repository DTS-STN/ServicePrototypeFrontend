import React from "react";
import { Page } from "../components/organisms/Page";
import { ResourceGrid } from "../components/organisms/ResoursesGrid";
import { ProfileCard } from "../components/organisms/ProfileCard";
import { NotificationCard } from "../components/organisms/NotificationCard";
import { AppointmentCard } from "../components/organisms/AppointmentCard";
import { ServiceProvidersCard } from "../components/organisms/ServiceProvidersCard";
import { useKeycloak } from "@react-keycloak/web";
import { JourneyCard } from "../components/organisms/JourneyCard";
import { ApplicationStatusCard } from "../components/organisms/ApplicationStatusCard";

export function Dashboard() {
  const { keycloak } = useKeycloak();
  const loginButtonClick = () => {
    keycloak.login();
  };
  return (
    <Page>
      <ProfileCard
        isAuthenticated={keycloak.authenticated}
        userName={`${
          keycloak.authenticated ? keycloak.idTokenParsed.name : ""
        }`}
        loginButtonClick={loginButtonClick}
      ></ProfileCard>
      {keycloak.authenticated ? (
        <div>
          <NotificationCard></NotificationCard>
          <JourneyCard></JourneyCard>
          <ApplicationStatusCard></ApplicationStatusCard>
          <AppointmentCard></AppointmentCard>
          {/* <ResourceGrid header = "Recommended Resource" resources=/> */}
          <ServiceProvidersCard></ServiceProvidersCard>
        </div>
      ) : (
        ""
      )}
    </Page>
  );
}
