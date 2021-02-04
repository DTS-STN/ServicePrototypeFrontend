import { casesData } from "./casesDataReducer";
import { combineReducers } from "redux";

export const cases = combineReducers({
  casesData,
});
