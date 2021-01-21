export const ENVIRONMENT = process.env.NODE_ENV;

// BENEFITSERVICE_URL
let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

if (!benefitservice_env_url && ENVIRONMENT !== "production") {
  //  benefitservice_env_url = "http://localhost:1337";
  // this uses the published version of strapi until we get the benefit service working.
  benefitservice_env_url = "https://benefit-service-dev.dev.dts-stn.com";
}

// KEYCLOAK
let keycloak_env_url = process.env.REACT_APP_KEYCLOAK_URL;
let keycloak_env_realm = process.env.REACT_APP_KEYCLOAK_REALM;
let keycloak_env_clientId = process.env.REACT_APP_KEYCLOAK_CLIENT_ID;

// Universal Access
let curam_ua_link = process.env.REACT_APP_CURAM_UA_LINK;

export const BENEFITSERVICE_URL = benefitservice_env_url;
export const KEYCLOAK_URL = keycloak_env_url;
export const KEYCLOAK_REALM = keycloak_env_realm;
export const KEYCLOAK_CLIENT_ID = keycloak_env_clientId;
export const CURAM_UA_LINK = curam_ua_link;
