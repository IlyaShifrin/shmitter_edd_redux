import {CHANGE_STATS} from "../actions/userAction.js";

// const Stats = {
//     followers: number
//     following: number
// }

export const statsReducer = (state, action) => {
    let res;
    switch (action.type) {
        case CHANGE_STATS:
            res = state[action.payload.statsName] + action.payload.sum;
            return {...state, [action.payload.statsName]: res >= 0 ? res : 0};
        default:
            return state;
    }
}