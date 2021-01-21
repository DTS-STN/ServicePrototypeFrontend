import Keycloak from "keycloak-js";
import { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID } from "./variables";

// Setup Keycloak instance as needed
// Pass initialization options as required  TODO
const initOptions = {
  url: KEYCLOAK_URL,
  realm: KEYCLOAK_REALM,
  clientId: KEYCLOAK_CLIENT_ID,
  resource: KEYCLOAK_CLIENT_ID,
  onLoad: "check-sso",
};

export const keycloak = new Keycloak(initOptions);
