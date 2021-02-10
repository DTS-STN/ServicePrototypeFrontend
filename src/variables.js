export const ENVIRONMENT = process.env.NODE_ENV;

// BENEFITSERVICE_URL
let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;
let caseservice_env_url = process.env.REACT_APP_CASESERVICE_BASE_URL;

console.log("ENV VARS");
console.log(process.env.REACT_APP_BENEFITSERVICE_BASE_URL);
console.log(process.env.REACT_APP_CASESERVICE_BASE_URL);

if (!benefitservice_env_url && ENVIRONMENT !== "production") {
  //  benefitservice_env_url = "http://localhost:1337";
  // this uses the published version of strapi until we get the benefit service working.
  benefitservice_env_url = "https://benefit-service-dev.dev.dts-stn.com";
}

if (!caseservice_env_url && ENVIRONMENT !== "production") {
  caseservice_env_url =
    "https://api.us-east.apiconnect.appdomain.cloud/hmakhijadeloitteca-api/dev/hfp-client-apis/v1";
}
// User Service URL
let user_service_env_url = process.env.REACT_APP_USER_SERVICE_BASE_URL;

if (!user_service_env_url && ENVIRONMENT !== "production") {
  user_service_env_url =
    "https://client-service.355ff83590384b89bcbf.canadacentral.aksapp.io";
}

// KEYCLOAK
let keycloak_env_url = process.env.REACT_APP_KEYCLOAK_URL;
let keycloak_env_realm = process.env.REACT_APP_KEYCLOAK_REALM;
let keycloak_env_clientId = process.env.REACT_APP_KEYCLOAK_CLIENT_ID;

// Curam prescreen link
let curam_prescreen_link = process.env.REACT_APP_CURAM_PRESCREEN_LINK;

export const BENEFITSERVICE_URL = benefitservice_env_url;
export const CASESERVICE_URL = caseservice_env_url;
export const KEYCLOAK_URL = keycloak_env_url;
export const KEYCLOAK_REALM = keycloak_env_realm;
export const KEYCLOAK_CLIENT_ID = keycloak_env_clientId;
export const USER_SERVICE_URL = user_service_env_url;
export const CURAM_PRESCREEN_LINK = curam_prescreen_link;

console.log("EXPORTED VARS");
console.log(BENEFITSERVICE_URL);
console.log(CASESERVICE_URL);
