export const ENVIRONMENT = process.env.NODE_ENV;

// BENEFITSERVICE_URL this links to strapi
let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

if (!benefitservice_env_url && ENVIRONMENT !== "production") {
  benefitservice_env_url = "http://localhost:1337";
  benefitservice_env_url = "https://benefit-service-dev.dev.dts-stn.com";
  benefitservice_env_url = "https://ebf-strapi-api-dev.dev.dts-stn.com";
}

export const BENEFITSERVICE_URL = benefitservice_env_url;

// This is for the benefit-service url

// let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

// if (!benefitservice_env_url && ENVIRONMENT !== "production") {
//   benefitservice_env_url = "https://benefit-service-dev.dev.dts-stn.com";
// }

// export const BENEFITSERVICE_URL = benefitservice_env_url;
