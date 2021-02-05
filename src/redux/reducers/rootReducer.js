import { language } from "./language";
import { benefits } from "./benefits";
import { questions } from "./questions";
import { lifejourneys } from "./lifejourneys";
import { user } from "./user";
import { combineReducers } from "redux";
import { answers } from "./answers";

export const rootReducer = combineReducers({
  language,
  benefits,
  questions,
  answers,
  lifejourneys,
  user,
});
