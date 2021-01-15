export const ENVIRONMENT = process.env.NODE_ENV;

// strapi_url
let strapi_env_url = process.env.REACT_APP_STRAPI_BASE_URL;

if (!strapi_env_url && ENVIRONMENT !== "production") {
  strapi_env_url = "http://localhost:1337";
  strapi_env_url = "https://benefit-service-dev.dev.dts-stn.com";
  strapi_env_url = "https://ebf-strapi-api-dev.dev.dts-stn.com";
}

export const STRAPI_URL = strapi_env_url;
