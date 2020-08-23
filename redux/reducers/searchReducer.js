import * as t from '../types.js';

const initialState = {
  hits: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ALGO_SEARCH:
      console.log(action.payload);
      return {
        ...state,
        hits: action.payload,
      };
    case t.ALGO_CLEAR:
      return {
        ...state,
        hits: null,
      };

    default:
      return state;
  }
};

export default searchReducer;
