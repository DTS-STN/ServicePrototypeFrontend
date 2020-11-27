import { language } from "./language";
import { benefits } from "./benefits";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  language,
  benefits,
});
