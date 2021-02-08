import { userData } from "./userDataReducer";
import { combineReducers } from "redux";

export const user = combineReducers({
  userData,
});
