import { ActionCreator } from 'redux';

import constants from '../constants';
import { LoginAction, Credentials } from '../types';

export const login: ActionCreator<LoginAction> = (payload: Credentials) => ({
    type: constants.LOGIN_STARTED,
    payload
})