import { combineReducers } from 'redux';

import restReducer from './restReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  rest: restReducer,
  auth: authReducer,
  search: searchReducer,
});

export default rootReducer;
