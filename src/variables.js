export const ENVIRONMENT = process.env.NODE_ENV;

// BENEFITSERVICE_URL
let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

if (!benefitservice_env_url && ENVIRONMENT !== "production") {
  //  benefitservice_env_url = "http://localhost:1337";
  // this uses the published version of strapi until we get the benefit service working.
  benefitservice_env_url = "https://benefit-service-dev.dev.dts-stn.com";
}

export const BENEFITSERVICE_URL = benefitservice_env_url;

//
// variables for the Keycloak service
//
let keycloak_env_url = process.env.KEYCLOAK_URL;
let keycloak_env_realm = process.env.KEYCLOAK_REALM;
let keycloak_env_clientId = process.env.KEYCLOAK_CLIENTID;

if (!keycloak_env_url && ENVIRONMENT !== "production") {
  keycloak_env_url = "https://keycloak.dev.dts-stn.com/auth";
}
if (!keycloak_env_realm && ENVIRONMENT !== "production") {
  keycloak_env_realm = "benefit-service-dev";
}
if (!keycloak_env_clientId && ENVIRONMENT !== "production") {
  keycloak_env_clientId = "benefit-service-frontend";
}

export const KEYCLOAK_URL = keycloak_env_url;
export const KEYCLOAK_REALM = keycloak_env_realm;
export const KEYCLOAK_CLIENTID = keycloak_env_clientId;
