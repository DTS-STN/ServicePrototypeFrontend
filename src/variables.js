export const ENVIRONMENT = process.env.NODE_ENV;

// BENEFITSERVICE_URL this links to strapi
let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

if (!benefitservice_env_url && ENVIRONMENT !== "production") {
  //  benefitservice_env_url = "http://localhost:1337";
  // this uses the published version of strapi until we get the benefit service working.
  benefitservice_env_url = "https://benefit-service-dev.dev.dts-stn.com";
}

export const BENEFITSERVICE_URL = benefitservice_env_url;

// Keycloak service
export const keycloak_env_url = process.env.KEYCLOAK_URL;
export const keycloak_env_realm = process.env.KEYCLOAK_REALM;
export const keycloak_env_clientId = process.env.KEYCLOAK_CLIENTID;

// This is for the benefit-service url

// let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

// if (!benefitservice_env_url && ENVIRONMENT !== "production") {
//   benefitservice_env_url = "https://benefit-service-dev.dev.dts-stn.com";
// }

// export const BENEFITSERVICE_URL = benefitservice_env_url;
