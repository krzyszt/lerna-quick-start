import { of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import constants from '../constants';
import { AuthAction } from '../types';
import { login$ } from '../../services/clientAPI';

export const loginEpic = (actions$: { pipe: (arg0: any, arg1: any) => any; }) => actions$
    .pipe(
        ofType(constants.LOGIN_STARTED),
        mergeMap((action: AuthAction) => login$(action.payload)
            .pipe(
                mergeMap((response) => {
                    return [
                        {
                            type: constants.LOGIN_SUCCEEDED,
                            payload: response.response,
                        },
                    ];
                }),
                catchError(error => of({
                    type: constants.LOGIN_FAILED,
                    error,
                })),
            )),
    );
