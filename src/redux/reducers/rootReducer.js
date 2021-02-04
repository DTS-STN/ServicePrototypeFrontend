import { language } from "./language";
import { benefits } from "./benefits";
import { questions } from "./questions";
import { lifejourneys } from "./lifejourneys";
import { cases } from "./cases";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  language,
  benefits,
  cases,
  questions,
  lifejourneys,
});
