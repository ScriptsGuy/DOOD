import { combineReducers } from 'redux';

import restReducer from './restReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  rest: restReducer,
  auth: authReducer,
});

export default rootReducer;
