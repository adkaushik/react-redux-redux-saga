import { fork, takeEvery, call } from 'redux-saga/effects';
import headerActions from '../actions/header';

export default () => {
  function* handleHeaderLoad({ type, payload = {} }) {
    // making a fake api call here in this saga
    try {
      const responseString = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos/1');
      if (responseString) {
        const response = yield responseString.json();
        console.log('Got the response ', response);
      }
    } catch (e) {
      // Handle errors by logging them somewhere in the backend to track
      console.log('error ', e);
    }
  }

  function* headerLoadWatcher() {
    yield takeEvery(headerActions.handleHeaderLoad, handleHeaderLoad);
  }


  function* watcher() {
    // fork individual sagas here to start all of them at once
    yield fork(headerLoadWatcher);
  }

  return {
    watcher
  };
}
