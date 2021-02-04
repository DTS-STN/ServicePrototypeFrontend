import { language } from "./language";
import { benefits } from "./benefits";
import { questions } from "./questions";
import { cases } from "./cases";
import { lifejourneys } from "./lifejourneys";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  language,
  benefits,
  cases,
  questions,
  lifejourneys,
});
