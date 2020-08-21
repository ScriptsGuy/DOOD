import * as t from '../types.js';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.AUTH_LOGIN:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case t.AUTH_REGISTER:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case t.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case t.AUTH_LOGOUT:
      return {
        data: null,
        loading: false,
        error: null,
      };
    case t.AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case t.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default authReducer;
