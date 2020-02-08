import { fromJS } from 'immutable';


import constants from '../constants';
import { AuthAction } from '../types';

const initialState = fromJS({
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
});

export default (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case constants.LOGIN_STARTED:
            return state.set('loading', true);
        case constants.LOGIN_SUCCEEDED:
            return state.merge({
                isAuthenticated: true,
                loading: false,
            });
        case constants.LOGIN_FAILED:
            return state.merge({
                loading: false,
                error: action.error,
            });

        default:
            return state;
    }
};
