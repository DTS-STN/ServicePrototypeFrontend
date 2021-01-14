export const ENVIRONMENT = process.env.NODE_ENV;

// BENEFITSERVICE_URL
let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

if (!benefitservice_env_url && ENVIRONMENT !== "production") {
  benefitservice_env_url = "http://localhost:1337";
}

export const BENEFITSERVICE_URL = benefitservice_env_url;

// let benefitservice_env_url = process.env.REACT_APP_BENEFITSERVICE_BASE_URL;

// if (!benefitservice_env_url && ENVIRONMENT !== "production") {
//   benefitservice_env_url = "http://localhost:1337";
// }

// export const BENEFITSERVICE_URL = benefitservice_env_url;
