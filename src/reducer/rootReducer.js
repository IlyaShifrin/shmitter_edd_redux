import {statsReducer} from "./statsReducer.js";
import {userReducer} from "./userReducer.js";

export const rootReducer = (state, action) => {
    return {
        user: userReducer(state.user, action),
        stats: statsReducer(state.stats, action)
    }
}