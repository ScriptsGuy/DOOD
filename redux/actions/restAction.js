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
