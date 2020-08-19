import * as t from '../types';

export const fetchposts = () => async (dispatch) => {
  dispatch({
    type: t.GET_POSTS,
    payload: ['1st post', '2nd post'],
  });
};
