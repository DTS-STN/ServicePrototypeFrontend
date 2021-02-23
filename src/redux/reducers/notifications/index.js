import { notificationsData } from "./notificationDataReducer";
import { combineReducers } from "redux";

export const notifications = combineReducers({
  notificationsData,
});
