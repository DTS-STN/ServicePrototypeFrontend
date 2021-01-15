import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required  TODO

const keycloak = new Keycloak({
  url: "https://keycloak.dev.dts-stn.com/auth",
  realm: "benefit-service-dev",
  clientId: "benefit-service-frontend",
});

export default keycloak;
