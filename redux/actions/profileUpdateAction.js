import axios from 'axios';
import * as t from '../types';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const updateProfile = (profile) => async (dispatch, getState) => {
  console.log(profile);
  dispatch({ type: t.UPDATE_PROFILE_LOADING });
  const token = getState().auth.data.access_token;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };

  axios
    .post(`${process.env.api}/api/updateProfile`, profile, { headers })
    .then((res) => {
      console.log(res);
      dispatch({ type: t.UPDATE_PROFILE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = () => async (dispatch, getState) => {
  const token = getState().auth.data.access_token;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };

  axios
    .get(`${process.env.api}/api/getProfile`, { headers })
    .then((res) => {
      console.log(res);
      dispatch({ type: t.GET_PROFILE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
