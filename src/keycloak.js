import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required  TODO

const keycloak = new Keycloak({
  // url: 'http://localhost:8080/auth',
  // realm: 'Test',
  // clientId: 'react-test',
});

export default keycloak;
