import { benefitsCount } from "./benefitsCountReducer";
import { combineReducers } from "redux";

export const benefits = combineReducers({
  benefitsCount,
});
