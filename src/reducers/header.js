import { createReducer } from 'reduxsauce';
import * as R from 'ramda';

import types from '../constants/header';


const INITIAL_STATE = {
  title: ''
};

const handleHeaderLoad = (state, action) => {
  return R.merge(state, { title: 'hello' });
};

const ACTION_HANDLERS = {
  [types.HANDLE_HEADER_LOAD]: handleHeaderLoad
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);