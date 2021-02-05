export const ACTION_TYPES = {
  // network action types
  NETWORK_REQUEST: "NETWORK_REQUEST",
  NETWORK_RECEIVED: "NETWORK_RECEIVED",
  NETWORK_REQUEST_FAILED: "NETWORK_REQUEST_FAILED",

  // i18n action types
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  // benefits action types
  SELECT_BENEFIT: "SELECT_BENEFIT",
  DESELECT_BENEFIT: "DESELECT_BENEFIT",

  SET_ANSWER: "SET_ANSWER",
  REMOVE_ANSWER: "REMOVE_ANSWER",
};

// network action constants
export const NETWORK_REQUEST_TYPES = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const NETWORK_FAILED_REASONS = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  BAD_REQUEST: "BAD_REQUEST",
  NOT_FOUND: "NOT_FOUND",
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
  NO_NETWORK: "NO_NETWORK",
  400: "BAD_REQUEST",
  404: "NOT_FOUND",
  401: "NOT_AUTHORIZED",
  500: "INTERNAL_SERVER_ERROR",
};

// i18n action constants
export const LANGUAGES = {
  EN: "EN",
  FR: "FR",
};
