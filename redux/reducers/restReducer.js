import * as t from '../types.js';

const initialState = {
  posts: null,
  post: {},
  favs: null,
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_FAVORIES:
      return {
        ...state,
        favs: action.payload,
      };
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
    case t.DELETE_FAVORY:
      return {
        ...state,
        favs: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
