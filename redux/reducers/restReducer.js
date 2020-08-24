import * as t from '../types.js';

const initialState = {
  posts: null,
  post: {},
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case t.GET_FILTERS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case t.CLEAR_FILTERS:
      return {
        ...state,
        posts: null,
        loading: false,
        error: null,
      };
    case t.ADD_FAVORY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default postReducer;
