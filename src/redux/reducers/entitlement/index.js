import { entitlementData } from "./entitlementAmountReducer";
import { combineReducers } from "redux";

export const entitlement = combineReducers({
  entitlementData,
});
