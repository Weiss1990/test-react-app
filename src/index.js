import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {rootReducer} from "./reducers/rootReducer";
import {Provider} from 'react-redux';

const appName = 'there is test react app, imitates e-shop';

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router basename='/'>
            <App appName={appName}/>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
