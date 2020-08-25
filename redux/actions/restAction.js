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
    .post('https://dood.devzone-dz.com/api/favories', { restaurant_id: id }, { headers })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};
export const getFavories = (id) => async (dispatch, getState) => {
  const token = getState().auth.data.access_token;
  console.log(token);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };

  const data = await axios
    .get('https://dood.devzone-dz.com/api/favories', { headers })
    .then((res) => {
      console.log(res);
      dispatch({ type: t.GET_FAVORIES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data);
};
export const deleteFavory = (id) => async (dispatch, getState) => {
  const token = getState().auth.data.access_token;
  const favs = getState().rest.favs;
  console.log('favs', favs);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };

  const data = await axios
    .delete(`https://dood.devzone-dz.com/api/favories/${id}`, { headers })
    .then((res) => {
      console.log(res);
      const newFavs = favs.filter((fav) => fav.favory_id !== id);
      console.log(newFavs);

      dispatch({ type: t.DELETE_FAVORY, payload: newFavs });
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
