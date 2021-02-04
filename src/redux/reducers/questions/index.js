import { questionsData } from "./questionsDataReducer";
import { combineReducers } from "redux";

export const questions = combineReducers({
  questionsData,
});
