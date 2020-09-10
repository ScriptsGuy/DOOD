import * as t from '../types';

export const getLocation = (lat, long) => async (dispatch, getState) => {
  //   console.log(lat, long);
  const cord = { lat, long };
  dispatch({ type: t.GET_LOCATION, payload: cord });
};
