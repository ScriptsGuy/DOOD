import axios from 'axios';

import * as t from '../types';

export const AddFavory = (id) => async (dispatch, getState) => {
  const token = getState().auth.data.access_token;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };
  const data = await axios
    .post('https://dood.devzone-dz.com/api/favories', { restaurant_id: id }, headers)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};
export const getFilters = (filters) => async (dispatch, getState) => {
  console.log(filters);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (filters.distance) {
    const data = await axios
      .post(
        `https://dood.devzone-dz.com/api/nearest?apiKey=${filters.apiKey}&&distance=${filters.distance}&&longitude=${filters.longtitude}&&latitude=${filters.latitude}&&limit=10`,
        headers
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: t.GET_FILTERS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  } else {
    dispatch({ type: t.CLEAR_FILTERS });
  }
};
