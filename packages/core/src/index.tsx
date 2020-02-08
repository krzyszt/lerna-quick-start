import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router/immutable";
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from "@material-ui/core/CssBaseline";

import './index.css';
import './styles/app.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import setupStore from "./reduxSetup";

// Create redux store with history
const history = createBrowserHistory();
const store = setupStore(history);

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

const MOUNT_POINT = document.getElementById("root");

const provider = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="h-full h-screen">
          <App />
        </div>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(provider, MOUNT_POINT);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
