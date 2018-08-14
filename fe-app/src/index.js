import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import history from './history';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
