import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { basketReducer } from "./basketReducer";
const rootReducer = combineReducers({todoReducer,basketReducer})
export const store = createStore(rootReducer);
