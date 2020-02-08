import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createEpicMiddleware } from 'redux-observable';
import { History } from 'history';

import createReducer from './reducers';
import rootEpic from './epics';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export default function configureStore(initialState = {}, history: History) {
    const epicMiddleware = createEpicMiddleware();
    const middlewares = [
        epicMiddleware,
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createReducer(history),
        fromJS(initialState),
        composeEnhancers(...enhancers),
    );

    epicMiddleware.run(rootEpic);

    return store;
}
