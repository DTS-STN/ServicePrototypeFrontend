import { lifeJourneysData } from "./lifejourneysDataReducer";
import { combineReducers } from "redux";

export const lifejourneys = combineReducers({
  lifeJourneysData,
});
