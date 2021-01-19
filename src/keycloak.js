import Keycloak from "keycloak-js";
import { KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENTID } from "./variables";

// Setup Keycloak instance as needed
// Pass initialization options as required  TODO

const keycloak = new Keycloak({
  url: KEYCLOAK_URL,
  realm: KEYCLOAK_REALM,
  clientId: KEYCLOAK_CLIENTID,
});

export default keycloak;
