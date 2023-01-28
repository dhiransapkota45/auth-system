import { combineReducers } from "redux";

import userReducer from "./reducers/alluserReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
