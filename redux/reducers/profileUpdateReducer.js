import * as t from '../types.js';

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const profileUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_PROFILE:
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
      };
    case t.UPDATE_PROFILE:
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case t.UPDATE_PROFILE_LOADING:
      console.log(action.payload);
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default profileUpdateReducer;
