import { combineEpics } from 'redux-observable';

import * as auth from './auth.epic';

const rootEpic = combineEpics(...Object.values({
    ...auth,
}));

export default rootEpic;
