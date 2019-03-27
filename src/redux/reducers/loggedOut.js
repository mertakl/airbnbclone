import * as types from '../actions/types';
import createReducer from  '../helpers/createReducer'

export const loggedInStatus = createReducer({}, {
    [types.SET_LOGGED_IN_STATE](state, action) {
        return action;
    }
});
