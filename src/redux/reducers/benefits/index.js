import { benefitsCount } from "./benefitsCountReducer";
import { benefitsData } from "./benefitsDataReducer";
import { benefitsEligibility } from "./benefitEligibilityReducer";
import { combineReducers } from "redux";

export const benefits = combineReducers({
  benefitsCount,
  benefitsData,
  benefitsEligibility,
});
