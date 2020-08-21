import * as t from '../types.js';

const initialState = {
  auth: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_LOGIN:
      return {
        ...state,
        auth: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
