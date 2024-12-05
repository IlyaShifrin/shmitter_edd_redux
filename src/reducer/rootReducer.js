import {statsReducer} from "./statsReducer.js";
import {userReducer} from "./userReducer.js";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    user: userReducer, stats: statsReducer
})
