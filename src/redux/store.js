import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./rootReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootreducer";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
