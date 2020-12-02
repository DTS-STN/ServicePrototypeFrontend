import { benefitsCount } from "./benefitsCountReducer";
import { benefitsData } from "./benefitsDataReducer";
import { combineReducers } from "redux";

export const benefits = combineReducers({
  benefitsCount,
  benefitsData,
});
