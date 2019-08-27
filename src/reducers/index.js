import { combineReducers } from 'redux';

import HeaderReducer from './header';

const appReducer = combineReducers({
  header: HeaderReducer
});

export default appReducer;