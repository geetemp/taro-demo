import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/index";

const middlewares = [thunkMiddleware, createLogger()];

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
