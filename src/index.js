import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import {
  watchAuth,
  watchBurgerBuild,
  watchOrders,
} from './store/sagas';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

import './index.css';
import App from './App';

//Reducers
import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import orderReducer from './store/reducers/orderReducer';
import authReducer from './store/reducers/authReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuild);
sagaMiddleware.run(watchOrders);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
