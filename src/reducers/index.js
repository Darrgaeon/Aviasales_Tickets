import { combineReducers } from "redux";
import { getTickets } from "./tickets";

export const rootReducer  = combineReducers({
  tickets: getTickets
});