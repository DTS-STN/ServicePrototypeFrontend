import { language } from "./language";
import { benefits } from "./benefits";
import { lifejourneys } from "./lifejourneys";
import { user } from "./user";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  language,
  benefits,
  lifejourneys,
  user,
});
