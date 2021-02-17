import { language } from "./language";
import { benefits } from "./benefits";
import { questions } from "./questions";
import { cases } from "./cases";
import { lifejourneys } from "./lifejourneys";
import { user } from "./user";
import { combineReducers } from "redux";
import { answers } from "./answers";
import { entitlement } from "./entitlement";

export const rootReducer = combineReducers({
  language,
  benefits,
  entitlement,
  cases,
  questions,
  answers,
  lifejourneys,
  user,
});
