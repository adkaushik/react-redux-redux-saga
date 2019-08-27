import { fork } from 'redux-saga/effects';

import headerSaga from './header';

// create an api using api sauce and inject into all the sagas here.
// Use that api wrapper to make network calls in the sagas

export default function* root() {
  yield fork(headerSaga().watcher);
}