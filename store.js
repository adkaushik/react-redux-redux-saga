import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import * as R from 'ramda';

import Config from './src/config/configuration';
import rootReducer from './src/reducers/index';
import sagas from './src/sagas/index';

const USE_LOGGER = Config.reduxLogging;

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const SAGA_LOGGING_BLACKLIST = [
  'EFFECT_TRIGGERED',
  'EFFECT_RESOLVED',
  'EFFECT_REJECTED',
];

const logger = createLogger({
  predicate: (getState, { type }) => (
    USE_LOGGER && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
  )
});

let reduxDebugger = a => a;

if (__DEV__ && typeof window !== 'undefined') {
  middlewares.push(logger);
  reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : reduxDebugger;
}

function _createStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      reduxDebugger
    )
  );

  sagaMiddleware.run(sagas);

  return store;
}

export default _createStore;