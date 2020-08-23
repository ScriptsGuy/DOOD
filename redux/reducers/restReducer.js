import * as t from '../types.js';

const initialState = {
  posts: [],
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
    case t.ADD_FAVORY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default postReducer;
