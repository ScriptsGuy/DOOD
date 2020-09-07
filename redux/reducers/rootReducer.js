import { combineReducers } from 'redux';

import restReducer from './restReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import locReducer from './locReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  rest: restReducer,
  auth: authReducer,
  search: searchReducer,
  location: locReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;
