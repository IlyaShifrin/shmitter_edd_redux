import {CHANGE_AVATAR, CHANGE_NAME, CHANGE_STATS} from "../actions/userAction.js";

export const twitterReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        case CHANGE_STATS:
            return {
                ...state,
                stats: {
                    ...state.stats,
                    [action.payload.statsName]: state.stats[action.payload.statsName] + action.payload.sum < 0 ? 0 : state.stats[action.payload.statsName] + action.payload.sum
                }
            }
        default:
            return state;
    }
}