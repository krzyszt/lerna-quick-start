/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import { History } from 'history';
// import { reducer as toastrReducer } from "react-redux-toastr";

/**
 * Inserting application reducers
 */
import auth from "./auth.reducer";

/**
 * Creates the main reducer
 */
export default (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth,
    });
