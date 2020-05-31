import { combineReducers } from "redux";

import { receptiesReducer } from "./reducers/receptiesReducer";

export const rootReducer = combineReducers({
  recepties: receptiesReducer,
});
