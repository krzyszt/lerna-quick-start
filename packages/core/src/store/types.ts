import { Action } from 'redux';

export interface Credentials {
    username: string,
    password: string,
}

// export type Token: string;

export interface AuthAction extends Action {
    type: string,
    payload: Credentials,
    error?: string,
}

export interface LoginAction extends Action {
    type: string,
    payload: Credentials
}